import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaComunicacionComponent } from './historia-comunicacion.component';

describe('HistoriaComunicacionComponent', () => {
  let component: HistoriaComunicacionComponent;
  let fixture: ComponentFixture<HistoriaComunicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoriaComunicacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoriaComunicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
