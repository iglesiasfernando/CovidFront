import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyListComponent } from './componentes/lista-estudios/lista-estudios.component';
import { NewStudyComponent } from './componentes/nuevo-estudio/nuevo-estudio.component';
import { StudyDetailComponent } from './componentes/detalle-estudio/detalle-estudio.component';


const routes: Routes = [
  { path: 'lista-analisis', 
  component: StudyListComponent },
  { path: 'nuevo-analisis', 
  component: NewStudyComponent },
  { path: 'detalle-analisis', 
  component: StudyDetailComponent }
    
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
