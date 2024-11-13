import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualDerechoCivilComponent } from './manual-derecho-civil.component';

describe('ManualDerechoCivilComponent', () => {
  let component: ManualDerechoCivilComponent;
  let fixture: ComponentFixture<ManualDerechoCivilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManualDerechoCivilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManualDerechoCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
