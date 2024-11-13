import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretosLetteringComponent } from './secretos-lettering.component';

describe('SecretosLetteringComponent', () => {
  let component: SecretosLetteringComponent;
  let fixture: ComponentFixture<SecretosLetteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecretosLetteringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecretosLetteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
