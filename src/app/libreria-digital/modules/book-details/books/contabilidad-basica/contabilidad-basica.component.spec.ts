import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContabilidadBasicaComponent } from './contabilidad-basica.component';

describe('ContabilidadBasicaComponent', () => {
  let component: ContabilidadBasicaComponent;
  let fixture: ComponentFixture<ContabilidadBasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContabilidadBasicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContabilidadBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
