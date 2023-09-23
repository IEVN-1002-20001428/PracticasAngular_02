import { Component } from '@angular/core';
import { Iproducto } from '../iproducto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  imageWidth: number = 50;
  imageMargin: number = 2;
  muestraImg: boolean = true;
  listFilter: string = '';

  showImage(): void {
    this.muestraImg = !this.muestraImg;
  }

  productos: Iproducto[] = [
    {
      "productoId": 1,
      "modelo": "Sentra",
      "descripcion": "4 puertas familiar",
      "year": "febrero 3 2020",
      "precio": 120000,
      "marca": "NISSAN",
      "color": "Azul",
      "imagenUrl": "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "productoId": 2,
      "modelo": "A4",
      "descripcion": "2 puertas",
      "year": "marzo 5 2022",
      "precio": 180000,
      "marca": "AUDI",
      "color": "Blanco",
      "imagenUrl": "https://images.pexels.com/photos/8526608/pexels-photo-8526608.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "productoId": 3,
      "modelo": "Rio",
      "descripcion": "2 puertas familiar",
      "year": "january 2 2023",
      "precio": 200000,
      "marca": "KIA",
      "color": "Rosa",
      "imagenUrl": "https://images.pexels.com/photos/3999194/pexels-photo-3999194.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]

}
