import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {

  num1 = "";
  num2 = "";
  opcion: number = 0;
  resultado: number = 0;

  sumar() {
    if (this.opcion == 1) {
      this.resultado = parseFloat(this.num1) + parseFloat(this.num2);
    }
    if (this.opcion == 2) {
      this.resultado = parseFloat(this.num1) - parseFloat(this.num2);
    }
    if (this.opcion == 3) {
      this.resultado = parseFloat(this.num1) * parseFloat(this.num2);
    }
    if (this.opcion == 4) {
      this.resultado = parseFloat(this.num1) / parseFloat(this.num2);
    }
    if (this.opcion == 0) {
      this.resultado = 0;
    }

  }

}
