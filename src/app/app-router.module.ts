import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { OrdernarComponent } from './ventas/pages/ordernar/ordernar.component';


const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full'
  },
  {
    path:'numeros',
    component: NumerosComponent,
  },
  {
    path:'no-comunes',
    component: NoComunesComponent
  },
  {
    path: 'ordenar',
    component: OrdernarComponent
  },
  {
    path:'**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
