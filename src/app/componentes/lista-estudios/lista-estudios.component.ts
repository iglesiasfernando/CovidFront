import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { estudioInterface } from 'src/app/modelos/estudio.interface';
import { statsInterface } from 'src/app/modelos/stats.interface';
import {MatSnackBar} from '@angular/material/snack-bar';

import { EstudioService } from 'src/app/servicios/estudio.service';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';


  
  export interface EstudioData {
    name: string;
    country: string;
    result: boolean;
  }
  
  
  @Component({
    selector: 'app-lista-estudios',
    templateUrl: './lista-estudios.component.html',
    styleUrls: ['./lista-estudios.component.css']
  })
  export class ListaEstudiosComponent implements OnInit {
  
    displayedColumns: string[] = ['Nombre', 'Pais', 'Resultado', 'Detalle'];
    dataSource: MatTableDataSource<estudioInterface>;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
  
    public studies: estudioInterface[];
    public cargando: boolean;
    public stats: statsInterface;
    filters: string[] = ['Pais', 'Resultado','Ninguno'];
    selectedFilterValue : any;
    countryFilters: string[] = ['Argentina', 'Brasil','Chile','Uruguay'];
    resultFilters: string[] = ['Sano', 'Infectado','Inmune'];

    
    selectedCountryFilter = new FormControl();
    selectedResultFilter = new FormControl();

    constructor(
      private servicioEstudio: EstudioService,
      private servicioRouter: Router,
      private _snackBar: MatSnackBar
    ) {
    }
  
    ngOnInit() {
      this.cargando = true;
      this.getUsuarios();
      this.getStats();
      EstudioService.detailStudy = null;

    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  
    adaptResultFilter(resultFilterArray){

      if(resultFilterArray){
        resultFilterArray.forEach((element,index) => {
          var adaptedFilter = -1;
          switch(element){
            case "Sano":
              adaptedFilter = 0;
              break;
            case "Infectado":
              adaptedFilter = 1;
              break;
            case "Inmune":
              adaptedFilter = 2;
              break;
          }
          resultFilterArray[index] = adaptedFilter;
        
        });
      }
      else{
        return [];
      }
      
      return resultFilterArray;
    }

    detailPage(study){
      EstudioService.detailStudy = study
      this.servicioRouter.navigate(['/detalle-analisis']);
    }
    filterStudies(){
      var key = "";
      var values = []; 
      var clean = false;
      switch(this.selectedFilterValue){
        case "Pais":
          key = "country";
          values = this.selectedCountryFilter.value;
          break;
        case "Resultado":
          key = "result";
          values = this.adaptResultFilter(this.selectedResultFilter.value);

          break;
        case "Ninguno":
          clean = true;
          break;
      }

      
      if(clean){
        this.getUsuarios();
      }
      else{
        if(!values || values.length == 0 ){
          let snackBarRef = this._snackBar.open('Selecciona un criterio de filtro',"Ok");

        }
        else{
          this.cargando = true;
          this.servicioEstudio.getFilteredStudies(key,values).subscribe(
            data => {
              this.studies = data;
              this.setDatatable();
              this.cargando = false;
            },
            err => {
              console.log(err);
              let snackBarRef = this._snackBar.open('Ups, ocurrio un error filtrando estudios',"Ok");
              this.cargando = false;
  
            }
          )
        }
        
      }
      
    }
    getStats(){
      this.servicioEstudio.getStats().subscribe(
        data => {
          this.stats = data;
          this.setDatatable();
        },
        err => {
          console.log(err);
          
        }
      )
    }
    getUsuarios(){
      this.servicioEstudio.getStudies().subscribe(
        data => {
          this.studies = data;
          this.setDatatable();
          this.cargando = false;
        },
        err => {
          console.log(err);
          let snackBarRef = this._snackBar.open('Ups, ocurrio un error cargando estudios',"Ok");

          this.cargando = false;
        }
      )
    }
    cargarAnalisis(){
      this.servicioRouter.navigate(['/nuevo-analisis']);
    }
    getColor(result){
      switch(result){
        case 0:
            return "green";
        case 1:
          return "green";
        case 2:
          return "green";
      };
    }
  
    setDatatable(){
      this.dataSource = new MatTableDataSource(this.studies);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  
  
    editPage(idUsuario: string){
      this.servicioRouter.navigate(['/editarUsuario', idUsuario])
    }
  
    infoPage(idUsuario: string){
      this.servicioRouter.navigate(['/detalleUsuario', idUsuario])
    }
  
    getFormattedResult(result){

      return {'backgroundColor':'green' };
    }

  }
  