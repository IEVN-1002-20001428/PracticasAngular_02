import { Component } from '@angular/core';

@Component({
  selector: 'app-suma2',
  templateUrl: './suma2.component.html',
  styleUrls: ['./suma2.component.css']
})
export class Suma2Component {

  num1 = 0;
  num2 = 0;
  resultado = 0;

  sumar() {
    this.resultado = this.num1 + this.num2;
  }

}
