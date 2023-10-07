import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  //El boleto cuesta $12.00
  //1.Cada comprador puede comprar 7 boletos
  //2. >5 boletos es 15% de descuento
  //3. >= 3 && <=5 es 10% de descuento
  //4. <3 no hay descuento
  //5. Si utilizan tarjeta CINECO +10% de descuento

  nombre: string = "";
  compradores: number = 0;
  tarjeta: number = 0;
  cineco: string = "";
  precio: number = 12;
  boletos: number = 0;
  subtotal: number = 0;
  descuento: number = 0;
  total: number = 0;

  tarjetaCineco() {
    if (this.tarjeta == 1) {
      this.cineco = "SI";
    } else {
      this.cineco = "NO";
    }
  }

  procesar() {

    this.descuento = 0;
    this.subtotal = 0;
    this.total = 0;
    let boletos_maximos = this.compradores * 7;

    if (this.boletos > boletos_maximos) {
      alert(`La cantidad de boletos excede la cantidad máxima: ${this.compradores} comprador(s) pueden comprar ${boletos_maximos} boletos`);
      return;
    }

    this.tarjetaCineco();
    this.subtotal = (this.boletos * this.precio);

    if (this.boletos > 5) {
      this.descuento = (this.subtotal * 0.15);
      this.subtotal = this.subtotal - (this.subtotal * 0.15);
    }
    else if (this.boletos >= 3 && this.boletos <= 5) {
      this.descuento = (this.subtotal * 0.10);
      this.subtotal = this.subtotal - (this.subtotal * 0.10);
    }

    //CINECO
    if (this.tarjeta == 1) {
      this.descuento += (this.subtotal * 0.10);
      this.subtotal = this.subtotal - (this.subtotal * 0.10);
    }

    //this.total = this.subtotal - this.descuento;
    this.total = this.subtotal;
  }

  salir() {
    location.reload();
  }

}
