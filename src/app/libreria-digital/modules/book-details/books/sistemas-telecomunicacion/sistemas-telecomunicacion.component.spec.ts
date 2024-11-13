import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasTelecomunicacionComponent } from './sistemas-telecomunicacion.component';

describe('SistemasTelecomunicacionComponent', () => {
  let component: SistemasTelecomunicacionComponent;
  let fixture: ComponentFixture<SistemasTelecomunicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SistemasTelecomunicacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SistemasTelecomunicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
