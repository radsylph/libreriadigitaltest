import { Component } from '@angular/core';
import { option } from '../shared/components/menu-options/menu-options.component';

@Component({
  selector: 'app-libreria-digital',
  templateUrl: './libreria-digital.component.html',
  styleUrl: './libreria-digital.component.css'
})
export class LibreriaDigitalComponent {

  options: option[] = [
    {
      label: 'Mis Libros',
      route: './mis-libros',
      icon: 'book'
    },
    {
      label: 'Categorías',
      route: './categorias',
      icon: 'category'
    }
  ];

  constructor() { }

}
