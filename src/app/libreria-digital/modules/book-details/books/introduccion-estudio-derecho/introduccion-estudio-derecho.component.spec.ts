import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionEstudioDerechoComponent } from './introduccion-estudio-derecho.component';

describe('IntroduccionEstudioDerechoComponent', () => {
  let component: IntroduccionEstudioDerechoComponent;
  let fixture: ComponentFixture<IntroduccionEstudioDerechoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroduccionEstudioDerechoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroduccionEstudioDerechoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
