import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Modules
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { LibreriaDigitalModule } from './libreria-digital/libreria-digital.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule,
    MaterialModule,
    LibreriaDigitalModule,
    SharedModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
