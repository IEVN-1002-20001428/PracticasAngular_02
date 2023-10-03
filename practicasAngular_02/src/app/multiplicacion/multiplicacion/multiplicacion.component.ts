import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.component.html',
  styleUrls: ['./multiplicacion.component.css']
})
export class MultiplicacionComponent {

  num1: number = 0;
  num2: number = 0;
  operacion: string = "";
  resultado: number = 0;

  calcular() {

    this.operacion = "";
    this.resultado = 0;
    if (this.num1 == 0) {
      this.resultado = 0;
      return;
    }

    for (var i = 0; i < this.num1; i++) {
      this.operacion += this.num2;
      if (i != (this.num1 - 1)) {
        this.operacion += " + ";
      }
      this.resultado += this.num2;
    }

  }

}
