import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudyService } from 'src/app/servicios/estudio.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-nuevo-estudio',
  templateUrl: './nuevo-estudio.component.html',
  styleUrls: ['./nuevo-estudio.component.css']
})
export class NewStudyComponent implements OnInit {

  constructor(
    private studyService: StudyService,
    private routerService: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  dnaAllowed = ["C","T","G","A","\n"];
  

  newStudyForm = new FormGroup({
    name: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    dna: new FormControl('', Validators.required)

  });

  dnaTextChanged(){
   //var formatAdn = this.getFormattedAdn(this.newStudyForm.controls.adn.value);
   Array.from(this.newStudyForm.controls.dna.value).forEach((element : string) => {
      if(!this.dnaAllowed.includes(element.toUpperCase())){
        this.newStudyForm.patchValue({
            dna : this.newStudyForm.controls.dna.value.replaceAll(element,"")
          })
      }

   });
   
   
  }
 
  cancel(){
    this.routerService.navigate(["/lista-analisis"]);

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
  newStudyClick(){
    var dna = this.newStudyForm.controls.dna.value.trim().split("\n")
    if(!this.validateDna(dna)){
      let snackBarRef = this._snackBar.open('El dna no tiene el formato NxN',"Ok");
    }
    else{
      var study =  {
        name :this.newStudyForm.controls.name.value,
        country : this.newStudyForm.controls.country.value,
        dna : dna
      }
      this.studyService.insertStudy(study).subscribe(
        data => {
          let snackBarRef = this._snackBar.open('Caso cargado',"Ok");
          this.routerService.navigate(["/lista-analisis"]);
  
        },
        err => {
          console.log(err);
          let snackBarRef = this._snackBar.open('Ups, ocurrio un error inesperado',"Ok");

          
        }
      )
    }  


    

  }

}

