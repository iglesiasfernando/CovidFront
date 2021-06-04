import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEstudiosComponent } from './componentes/lista-estudios/lista-estudios.component';
import { NuevoEstudioComponent } from './componentes/nuevo-estudio/nuevo-estudio.component';
import { DetalleEstudioComponent } from './componentes/detalle-estudio/detalle-estudio.component';


const routes: Routes = [
  { path: 'lista-analisis', 
  component: ListaEstudiosComponent },
  { path: 'nuevo-analisis', 
  component: NuevoEstudioComponent },
  { path: 'detalle-analisis', 
  component: DetalleEstudioComponent }
    
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
