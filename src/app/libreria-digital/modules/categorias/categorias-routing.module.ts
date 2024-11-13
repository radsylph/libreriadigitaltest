import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CategoriasComponent } from './categorias.component';
import { DerechoComponent } from './pages/derecho/derecho.component';
import { InformaticaComponent } from './pages/informatica/informatica.component';
import { DisenoComponent } from './pages/diseno/diseno.component';
import { ComunicacionSocialComponent } from './pages/comunicacion-social/comunicacion-social.component';
import { ContaduriaComponent } from './pages/contaduria/contaduria.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriasComponent,
    pathMatch: 'full'
  },
  {
    path: 'derecho',
    component: DerechoComponent
  },
  {
    path: 'informatica',
    component: InformaticaComponent
  },
  {
    path: 'diseno',
    component: DisenoComponent
  },
  {
    path: 'comunicacion-social',
    component: ComunicacionSocialComponent
  },
  {
    path: 'contaduria',
    component: ContaduriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
