import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerechoComponent } from './derecho.component';

describe('DerechoComponent', () => {
  let component: DerechoComponent;
  let fixture: ComponentFixture<DerechoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DerechoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DerechoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
