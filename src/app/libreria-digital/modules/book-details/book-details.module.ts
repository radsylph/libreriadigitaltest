import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BookDetailsRoutingModule } from './book-details-routing.module';
import { SharedModule } from '../../../shared/shared.module';

// Components
import { CosasBienesDerechosRealesComponent } from './books/cosas-bienes-derechos-reales/cosas-bienes-derechos-reales.component';
import { CursoTeoriaDerechoComponent } from './books/curso-teoria-derecho/curso-teoria-derecho.component';
import { IntroduccionEstudioDerechoComponent } from './books/introduccion-estudio-derecho/introduccion-estudio-derecho.component';
import { ManualDerechoCivilComponent } from './books/manual-derecho-civil/manual-derecho-civil.component';
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


@NgModule({
  declarations: [
    ManualDerechoCivilComponent,
    CosasBienesDerechosRealesComponent,
    IntroduccionEstudioDerechoComponent,
    CursoTeoriaDerechoComponent,
    HistoriaDelDisenoComponent,
    ElementosDelDisenoComponent,
    CartelesHistoriaLenguajeComponent,
    SecretosLetteringComponent,
    SeguridadInformaticaAltaDisponibilidadComponent,
    SistemasTelecomunicacionComponent,
    DesarrolloAplicacionesWebComponent,
    InteligenciaArtificialComponent,
    ContabilidadBasicaComponent,
    FundamentosContabilidadFinancieraComponent,
    IntroduccionTeoriaEconomicaComponent,
    PrincipiosContabilidadComponent,
    HistoriaComunicacionComponent,
    ManualFotografiaComponent,
    PsicologiaComunicacionComponent,
    FundamentosComunicacionComponent
  ],
  imports: [
    CommonModule,
    BookDetailsRoutingModule,
    SharedModule,
    PdfViewerModule
  ]
})
export class BookDetailsModule { }
