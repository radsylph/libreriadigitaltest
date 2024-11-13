import { Component, Input } from '@angular/core';

export interface option {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrl: './menu-options.component.css'
})
export class MenuOptionsComponent {

  @Input() options: option[] = [];

  constructor() { }

}
