import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualFotografiaComponent } from './manual-fotografia.component';

describe('ManualFotografiaComponent', () => {
  let component: ManualFotografiaComponent;
  let fixture: ComponentFixture<ManualFotografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManualFotografiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManualFotografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
