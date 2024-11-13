import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoComponent } from './diseno.component';

describe('DisenoComponent', () => {
  let component: DisenoComponent;
  let fixture: ComponentFixture<DisenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisenoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
