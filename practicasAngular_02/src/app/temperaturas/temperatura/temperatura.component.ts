import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent {

  temperatura = "";
  resultado: number = 0;
  opcion: number = 0;

  convertir() {
    if (this.opcion == 1) {
      this.resultado = parseFloat(this.temperatura) - 32 * (5 / 9);
    }
    if (this.opcion == 2) {
      this.resultado = parseFloat(this.temperatura) * (9 / 5) + 32;
    }
  }

}
