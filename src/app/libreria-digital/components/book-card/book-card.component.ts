import { Component, Input } from '@angular/core';

export interface Book {
  title: string;
  img: string;
  route: string;
}

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {

  @Input() books: Book[] = [];

}
