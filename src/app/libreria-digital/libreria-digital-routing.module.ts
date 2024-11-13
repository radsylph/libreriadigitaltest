// Angular
import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

// Components
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LibreriaDigitalComponent } from './libreria-digital.component';
import { MisLibrosComponent } from './pages/mis-libros/mis-libros.component';
import { OtrosComponent } from './pages/otros/otros.component';

const routes: Routes = [
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'mis-libros',
    component: MisLibrosComponent
  },
  {
    path: 'categorias',
    loadChildren: () => import('./modules/categorias/categorias.module').then(m => m.CategoriasModule)
  },
  {
    path: 'otros',
    component: OtrosComponent
  },
  {
    path: 'book-details',
    loadChildren: () => import('./modules/book-details/book-details.module').then(m => m.BookDetailsModule)
  },
  {
    path: '',
    component: LibreriaDigitalComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibreriaDigitalRoutingModule { }
