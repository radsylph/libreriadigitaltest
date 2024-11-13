import { Component } from '@angular/core';

// Interfaces
import { Book } from '../../../../components/book-card/book-card.component';

@Component({
  selector: 'app-informatica',
  templateUrl: './informatica.component.html',
  styleUrl: './informatica.component.css'
})
export class InformaticaComponent {

  books: Book[] = [
    {
      title: 'Seguridad Informática y Alta Disponibilidad',
      img: 'assets/portadas/portada-seguridad-informatica-alta-disponibilidad.png',
      route: '/libreria-digital/book-details/seguridad-informatica-alta-disponibilidad'
    },
    {
      title: 'Introducción a los Sistemas de Telecomunicaciones',
      img: 'assets/portadas/portada-sistemas-telecomunicacion.png',
      route: '/libreria-digital/book-details/sistemas-telecomunicacion'
    },
    {
      title: 'Desarrollo de Aplicaciones Web',
      img: 'assets/portadas/portada-desarrollo-aplicaciones-web.png',
      route: '/libreria-digital/book-details/desarrollo-aplicaciones-web'
    },
    {
      title: 'Inteligencia Artificial',
      img: 'assets/portadas/portada-inteligencia-artificial.png',
      route: '/libreria-digital/book-details/inteligencia-artificial'
    }
  ];

  constructor() { }

}
