import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionTeoriaEconomicaComponent } from './introduccion-teoria-economica.component';

describe('IntroduccionTeoriaEconomicaComponent', () => {
  let component: IntroduccionTeoriaEconomicaComponent;
  let fixture: ComponentFixture<IntroduccionTeoriaEconomicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroduccionTeoriaEconomicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroduccionTeoriaEconomicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
