import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ManualDerechoCivilComponent } from './books/manual-derecho-civil/manual-derecho-civil.component';
import { CosasBienesDerechosRealesComponent } from './books/cosas-bienes-derechos-reales/cosas-bienes-derechos-reales.component';
import { IntroduccionEstudioDerechoComponent } from './books/introduccion-estudio-derecho/introduccion-estudio-derecho.component';
import { CursoTeoriaDerechoComponent } from './books/curso-teoria-derecho/curso-teoria-derecho.component';
import { HistoriaDelDisenoComponent } from './books/historia-del-diseno/historia-del-diseno.component';
import { ElementosDelDisenoComponent } from './books/elementos-del-diseno/elementos-del-diseno.component';
import { CartelesHistoriaLenguajeComponent } from './books/carteles-historia-lenguaje/carteles-historia-lenguaje.component';
import { SecretosLetteringComponent } from './books/secretos-lettering/secretos-lettering.component';
import { SeguridadInformaticaAltaDisponibilidadComponent } from './books/seguridad-informatica-alta-disponibilidad/seguridad-informatica-alta-disponibilidad.component';
import { SistemasTelecomunicacionComponent } from './books/sistemas-telecomunicacion/sistemas-telecomunicacion.component';
import { DesarrolloAplicacionesWebComponent } from './books/desarrollo-aplicaciones-web/desarrollo-aplicaciones-web.component';
import { InteligenciaArtificialComponent } from './books/inteligencia-artificial/inteligencia-artificial.component';
import { ContabilidadBasicaComponent } from './books/contabilidad-basica/contabilidad-basica.component';
import { FundamentosContabilidadFinancieraComponent } from './books/fundamentos-contabilidad-financiera/fundamentos-contabilidad-financiera.component';
import { IntroduccionTeoriaEconomicaComponent } from './books/introduccion-teoria-economica/introduccion-teoria-economica.component';
import { PrincipiosContabilidadComponent } from './books/principios-contabilidad/principios-contabilidad.component';
import { HistoriaComunicacionComponent } from './books/historia-comunicacion/historia-comunicacion.component';
import { ManualFotografiaComponent } from './books/manual-fotografia/manual-fotografia.component';
import { PsicologiaComunicacionComponent } from './books/psicologia-comunicacion/psicologia-comunicacion.component';
import { FundamentosComunicacionComponent } from './books/fundamentos-comunicacion/fundamentos-comunicacion.component';

const routes: Routes = [
  {
    path: 'manual-derecho-civil',
    component: ManualDerechoCivilComponent
  },
  {
    path: 'cosas-bienes-derechos-reales',
    component: CosasBienesDerechosRealesComponent
  },
  {
    path: 'introduccion-estudio-derecho',
    component: IntroduccionEstudioDerechoComponent
  },
  {
    path: 'curso-teoria-derecho',
    component: CursoTeoriaDerechoComponent
  },
  {
    path: 'historia-del-diseno',
    component: HistoriaDelDisenoComponent
  },
  {
    path: 'elementos-del-diseno',
    component: ElementosDelDisenoComponent
  },
  {
    path: 'carteles-historia-lenguaje',
    component: CartelesHistoriaLenguajeComponent
  },
  {
    path: 'secretos-lettering',
    component: SecretosLetteringComponent
  },
  {
    path: 'seguridad-informatica-alta-disponibilidad',
    component: SeguridadInformaticaAltaDisponibilidadComponent
  },
  {
    path: 'sistemas-telecomunicacion',
    component: SistemasTelecomunicacionComponent
  },
  {
    path: 'desarrollo-aplicaciones-web',
    component: DesarrolloAplicacionesWebComponent
  },
  {
    path: 'inteligencia-artificial',
    component: InteligenciaArtificialComponent
  },
  {
    path: 'contabilidad-basica',
    component: ContabilidadBasicaComponent
  },
  {
    path: 'fundamentos-contabilidad-financiera',
    component: FundamentosContabilidadFinancieraComponent
  },
  {
    path: 'introduccion-teoria-economica',
    component: IntroduccionTeoriaEconomicaComponent
  },
  {
    path: 'principios-contabilidad',
    component: PrincipiosContabilidadComponent
  },
  {
    path: 'historia-comunicacion',
    component: HistoriaComunicacionComponent
  },
  {
    path: 'manual-fotografia',
    component: ManualFotografiaComponent
  },
  {
    path: 'psicologia-comunicacion',
    component: PsicologiaComunicacionComponent
  },
  {
    path: 'fundamentos-comunicacion',
    component: FundamentosComunicacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookDetailsRoutingModule { }
