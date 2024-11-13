import { Component } from '@angular/core';
import { Book } from '../../components/book-card/book-card.component';

@Component({
  selector: 'app-mis-libros',
  templateUrl: './mis-libros.component.html',
  styleUrl: './mis-libros.component.css'
})
export class MisLibrosComponent {

  books: Book[] = [
    {
      title: 'Manual de Derecho Civil: Personas',
      img: 'assets/portadas/portada-manual-civil-personas.png',
      route: '/libreria-digital/book-details/manual-derecho-civil'
    },
    {
      title: 'Cosas, Bienes y Derechos Reales',
      img: 'assets/portadas/portada-cosas-bienes-y-derechos-reales.png',
      route: '/libreria-digital/book-details/cosas-bienes-derechos-reales'
    },
    {
      title: 'Introducción al Estudio del Derecho',
      img: 'assets/portadas/portada-introduccion-al-estudio-del-derecho.png',
      route: '/libreria-digital/book-details/introduccion-estudio-derecho'
    },
    {
      title: 'Curso de Teoría del Derecho',
      img: 'assets/portadas/portada-curso-de-teoria-del-derecho.png',
      route: '/libreria-digital/book-details/curso-teoria-derecho'
    }
  ]
  constructor() { }

}
