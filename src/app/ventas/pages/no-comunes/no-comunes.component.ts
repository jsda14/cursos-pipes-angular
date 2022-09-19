import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent  {
  //i18nSelect
  nombre: string = "Jhon";
  genero: string = "masculino";
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  //I18Plural
  clientes: string[] = ['Maria', 'Pedro', 'Jhon', 'Fernando', 'Maricela', 'Jesús'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona(){
    if(this.genero === "masculino"){
      this.nombre = "Mariana"
      this.genero = "femenino"
    }else {
      this.nombre = "Jhon"
      this.genero = "masculino"
    }
  }

  eliminarPersona(){
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: "Jhon",
    edad: 35,
    dirrecion: 'Gustavo Restrepo, Bogotá'
  }

  //Json Pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  //Async Pipe

  miObservable = interval(2000); // 0,1,2,3...

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve('Tenemos data de la promesa')
    }, 3500)
  });
}