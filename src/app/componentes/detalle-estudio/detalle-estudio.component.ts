import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,Route } from '@angular/router';
import { StudyService } from 'src/app/servicios/estudio.service';


@Component({
  selector: 'app-detalle-estudio',
  templateUrl: './detalle-estudio.component.html',
  styleUrls: ['./detalle-estudio.component.css']
})
export class DetalleEstudioComponent implements OnInit {

  public study;
  constructor( private routerService: Router,private studyService: StudyService) { }

  ngOnInit(): void {
    if(!StudyService.detailStudy){
      this.cancel()    
    }
    else{
      this.study = StudyService.detailStudy;
    }
  }
  cancel(){
    this.routerService.navigate(["/lista-analisis"]);

   }
   
}
