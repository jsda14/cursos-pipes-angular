import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {

  nombreLower: string = "jhon delgado";
  nombreUpper: string = "JHON DELGADO";
  nombreCompleto: string = "jHoN DelGAdo";

  fecha: Date = new Date();
}
