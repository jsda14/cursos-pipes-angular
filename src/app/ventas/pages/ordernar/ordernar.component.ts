import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordernar',
  templateUrl: './ordernar.component.html',
})
export class OrdernarComponent {

  onMayus: boolean = true;
  nombre: string = "Jhon";
  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Literna Verde',
      vuela: true,
      color: Color.verde
    }
  ];

  changeCapitalize() {
    this.onMayus = !this.onMayus;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
    console.log(this.ordenarPor);

  }
}
