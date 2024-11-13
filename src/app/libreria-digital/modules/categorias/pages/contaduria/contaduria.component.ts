import { Component } from '@angular/core';

// Intefaces
import { Book } from '../../../../components/book-card/book-card.component';

@Component({
  selector: 'app-contaduria',
  templateUrl: './contaduria.component.html',
  styleUrl: './contaduria.component.css'
})
export class ContaduriaComponent {

  books: Book[] = [
    {
      title: 'Contabilidad Básica',
      img: 'assets/portadas/portada-contabilidad-basica.png',
      route: '/libreria-digital/book-details/contabilidad-basica'
    },
    {
      title: 'Fundamentos de Contabilidad Financiera',
      img: 'assets/portadas/portada-fundamentos-contabilidad-financiera.png',
      route: '/libreria-digital/book-details/fundamentos-contabilidad-financiera'
    },
    {
      title: 'Introducción a la Teoría Económica',
      img: 'assets/portadas/portada-introduccion-teoria-economica.png',
      route: '/libreria-digital/book-details/introduccion-teoria-economica'
    },
    {
      title: 'Principios de Contabilidad',
      img: 'assets/portadas/portada-principios-contabilidad.png',
      route: '/libreria-digital/book-details/principios-contabilidad'
    }
  ]

}
