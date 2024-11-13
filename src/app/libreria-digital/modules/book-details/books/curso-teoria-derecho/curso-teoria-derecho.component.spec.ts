import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoTeoriaDerechoComponent } from './curso-teoria-derecho.component';

describe('CursoTeoriaDerechoComponent', () => {
  let component: CursoTeoriaDerechoComponent;
  let fixture: ComponentFixture<CursoTeoriaDerechoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursoTeoriaDerechoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursoTeoriaDerechoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
