import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { DerechoComponent } from './pages/derecho/derecho.component';
import { DisenoComponent } from './pages/diseno/diseno.component';
import { InformaticaComponent } from './pages/informatica/informatica.component';
import { ContaduriaComponent } from './pages/contaduria/contaduria.component';
import { ComunicacionSocialComponent } from './pages/comunicacion-social/comunicacion-social.component';
import { CategoriasComponent } from './categorias.component';
import { SharedModule } from '../../../shared/shared.module';
import { BookCardComponent } from '../../components/book-card/book-card.component';
import { LibreriaDigitalModule } from '../../libreria-digital.module';


@NgModule({
  declarations: [
    DerechoComponent,
    DisenoComponent,
    InformaticaComponent,
    ContaduriaComponent,
    ComunicacionSocialComponent,
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    SharedModule,
    LibreriaDigitalModule
  ]
})
export class CategoriasModule { }
