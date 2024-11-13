import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentosContabilidadFinancieraComponent } from './fundamentos-contabilidad-financiera.component';

describe('FundamentosContabilidadFinancieraComponent', () => {
  let component: FundamentosContabilidadFinancieraComponent;
  let fixture: ComponentFixture<FundamentosContabilidadFinancieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FundamentosContabilidadFinancieraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundamentosContabilidadFinancieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
