import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,Route } from '@angular/router';
import { EstudioService } from 'src/app/servicios/estudio.service';


@Component({
  selector: 'app-detalle-estudio',
  templateUrl: './detalle-estudio.component.html',
  styleUrls: ['./detalle-estudio.component.css']
})
export class DetalleEstudioComponent implements OnInit {

  public study;
  constructor( private servicioRouter: Router,private servicioEstudio: EstudioService) { }

  ngOnInit(): void {
    if(!EstudioService.detailStudy){
      this.cancel()    
    }
    else{
      this.study = EstudioService.detailStudy;
    }
  }
  cancel(){
    this.servicioRouter.navigate(["/lista-analisis"]);

   }
   
}
