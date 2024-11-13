import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipiosContabilidadComponent } from './principios-contabilidad.component';

describe('PrincipiosContabilidadComponent', () => {
  let component: PrincipiosContabilidadComponent;
  let fixture: ComponentFixture<PrincipiosContabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipiosContabilidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipiosContabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
