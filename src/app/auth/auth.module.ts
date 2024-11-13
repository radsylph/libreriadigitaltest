// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

// Components
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class AuthModule { }
