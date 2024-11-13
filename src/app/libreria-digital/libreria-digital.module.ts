// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { LibreriaDigitalRoutingModule } from './libreria-digital-routing.module';

// Modules
import { SharedModule } from '../shared/shared.module';

// Components
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LibreriaDigitalComponent } from './libreria-digital.component';
import { MaterialModule } from '../material/material.module';
import { MisLibrosComponent } from './pages/mis-libros/mis-libros.component';
import { OtrosComponent } from './pages/otros/otros.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AboutUsComponent,
    ContactComponent,
    LibreriaDigitalComponent,
    MisLibrosComponent,
    OtrosComponent,
    BookCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    LibreriaDigitalRoutingModule,
    SharedModule
  ],
  exports: [
    BookCardComponent
  ]
})
export class LibreriaDigitalModule { }
