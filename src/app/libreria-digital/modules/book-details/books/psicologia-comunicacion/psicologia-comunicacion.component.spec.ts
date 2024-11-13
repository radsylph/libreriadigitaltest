import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologiaComunicacionComponent } from './psicologia-comunicacion.component';

describe('PsicologiaComunicacionComponent', () => {
  let component: PsicologiaComunicacionComponent;
  let fixture: ComponentFixture<PsicologiaComunicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PsicologiaComunicacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PsicologiaComunicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
