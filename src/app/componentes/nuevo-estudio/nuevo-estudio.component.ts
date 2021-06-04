import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EstudioService } from 'src/app/servicios/estudio.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-nuevo-estudio',
  templateUrl: './nuevo-estudio.component.html',
  styleUrls: ['./nuevo-estudio.component.css']
})
export class NuevoEstudioComponent implements OnInit {

  constructor(
    private servicioStudy: EstudioService,
    private servicioRouter: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  dnaAllowed = ["C","T","G","A","\n"];
  

  nuevoEstudioForm = new FormGroup({
    name: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    dna: new FormControl('', Validators.required)

  });

  dnaTextChanged(){
   //var formatAdn = this.getFormattedAdn(this.nuevoEstudioForm.controls.adn.value);
   Array.from(this.nuevoEstudioForm.controls.dna.value).forEach((element : string) => {
      if(!this.dnaAllowed.includes(element.toUpperCase())){
        this.nuevoEstudioForm.patchValue({
            dna : this.nuevoEstudioForm.controls.dna.value.replaceAll(element,"")
          })
      }

   });
   
   
  }
 
  cancelar(){
    this.servicioRouter.navigate(["/lista-analisis"]);

   }
   
  /**
   * @param dna string de NxN posiciones, previamente validado
   */
  
  validateDna(dnaArray){
    var valida = true;
    if(!dnaArray || dnaArray.length == 0){
      valida = false;
    }
    else{
      dnaArray.forEach(element => {
          if(element.length != dnaArray.length){
            valida = false;
          }
      });
    }
    return valida;

  }
  nuevoEstudioClick(){
    var dna = this.nuevoEstudioForm.controls.dna.value.trim().split("\n")
    if(!this.validateDna(dna)){
      let snackBarRef = this._snackBar.open('El dna no tiene el formato NxN',"Ok");
    }
    else{
      var study =  {
        name :this.nuevoEstudioForm.controls.name.value,
        country : this.nuevoEstudioForm.controls.country.value,
        dna : dna
      }
      this.servicioStudy.insertStudy(study).subscribe(
        data => {
          let snackBarRef = this._snackBar.open('Caso cargado',"Ok");
          this.servicioRouter.navigate(["/lista-analisis"]);
  
        },
        err => {
          console.log(err);
          let snackBarRef = this._snackBar.open('Ups, ocurrio un error inesperado',"Ok");

          
        }
      )
    }  


    

  }

}

