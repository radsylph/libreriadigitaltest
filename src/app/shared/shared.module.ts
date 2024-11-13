// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Modules
import { MaterialModule } from '../material/material.module';

// Components
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuOptionsComponent } from './components/menu-options/menu-options.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuOptionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuOptionsComponent
  ]
})
export class SharedModule { }
