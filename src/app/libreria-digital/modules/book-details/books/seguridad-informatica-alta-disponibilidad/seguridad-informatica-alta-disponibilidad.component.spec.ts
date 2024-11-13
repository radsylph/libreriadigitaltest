import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadInformaticaAltaDisponibilidadComponent } from './seguridad-informatica-alta-disponibilidad.component';

describe('SeguridadInformaticaAltaDisponibilidadComponent', () => {
  let component: SeguridadInformaticaAltaDisponibilidadComponent;
  let fixture: ComponentFixture<SeguridadInformaticaAltaDisponibilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeguridadInformaticaAltaDisponibilidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeguridadInformaticaAltaDisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
