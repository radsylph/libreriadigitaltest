import { Component } from '@angular/core';

// Interfaces
import { Book } from '../../../../components/book-card/book-card.component';

@Component({
  selector: 'app-diseno',
  templateUrl: './diseno.component.html',
  styleUrl: './diseno.component.css'
})
export class DisenoComponent {

  books: Book[] = [
    {
      title: 'Historia del Diseño Gráfico',
      img: 'assets/portadas/portada-historia-del-diseno.png',
      route: '/libreria-digital/book-details/historia-del-diseno'
    },
    {
      title: 'Los Elementos del Diseño',
      img: 'assets/portadas/portada-elementos-del-diseno.png',
      route: '/libreria-digital/book-details/elementos-del-diseno'
    },
    {
      title: 'Los carteles: su historia y su lenguaje',
      img: 'assets/portadas/portada-carteles-historia-lenguaje.png',
      route: '/libreria-digital/book-details/carteles-historia-lenguaje'
    },
    {
      title: 'Los Secretos del Lettering',
      img: 'assets/portadas/portada-secretos-lettering.png',
      route: '/libreria-digital/book-details/secretos-lettering'
    }
  ];

  constructor() { }

}
