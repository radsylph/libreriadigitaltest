import { Component } from '@angular/core';

// Interfaces
import { Book } from '../../../../components/book-card/book-card.component';

@Component({
  selector: 'app-comunicacion-social',
  templateUrl: './comunicacion-social.component.html',
  styleUrl: './comunicacion-social.component.css'
})
export class ComunicacionSocialComponent {

  books: Book[] = [
    {
      title: 'Historia y Comunicación Social',
      img: 'assets/portadas/portada-historia-comunicacion.png',
      route: '/libreria-digital/book-details/historia-comunicacion'
    },
    {
      title: 'Manual de Fotografía',
      img: 'assets/portadas/portada-manual-fotografia.png',
      route: '/libreria-digital/book-details/manual-fotografia'
    },
    {
      title: 'Psicología de la Comunicación',
      img: 'assets/portadas/portada-psicologia-comunicacion.png',
      route: '/libreria-digital/book-details/psicologia-comunicacion'
    },
    {
      title: 'Fundamentos de la Comunicación',
      img: 'assets/portadas/portada-fundamentos-comunicacion.png',
      route: '/libreria-digital/book-details/fundamentos-comunicacion'
    }
  ];

  constructor() { }

}
