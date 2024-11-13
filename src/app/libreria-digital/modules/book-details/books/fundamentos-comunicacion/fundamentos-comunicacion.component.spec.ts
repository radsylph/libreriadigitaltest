import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentosComunicacionComponent } from './fundamentos-comunicacion.component';

describe('FundamentosComunicacionComponent', () => {
  let component: FundamentosComunicacionComponent;
  let fixture: ComponentFixture<FundamentosComunicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FundamentosComunicacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundamentosComunicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
