import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartelesHistoriaLenguajeComponent } from './carteles-historia-lenguaje.component';

describe('CartelesHistoriaLenguajeComponent', () => {
  let component: CartelesHistoriaLenguajeComponent;
  let fixture: ComponentFixture<CartelesHistoriaLenguajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartelesHistoriaLenguajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartelesHistoriaLenguajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
