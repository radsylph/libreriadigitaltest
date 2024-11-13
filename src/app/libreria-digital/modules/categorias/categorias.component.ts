import { Component } from '@angular/core';
import { option } from '../../../shared/components/menu-options/menu-options.component';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

  options: option[] = [
    {
      label: 'Derecho',
      route: 'derecho',
      icon: 'book'
    },
    {
      label: 'Diseño',
      route: 'diseno',
      icon: 'brush'
    },
    {
      label: 'Informática',
      route: 'informatica',
      icon: 'devices'
    },
    {
      label: 'Contaduría',
      route: 'contaduria',
      icon: 'account_balance'
    },
    {
      label: 'Comunicación Social',
      route: 'comunicacion-social',
      icon: 'chat'
    }
  ]

  constructor() { }

}
