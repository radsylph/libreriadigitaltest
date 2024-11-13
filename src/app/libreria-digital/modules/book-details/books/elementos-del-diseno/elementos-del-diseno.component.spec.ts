import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosDelDisenoComponent } from './elementos-del-diseno.component';

describe('ElementosDelDisenoComponent', () => {
  let component: ElementosDelDisenoComponent;
  let fixture: ComponentFixture<ElementosDelDisenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElementosDelDisenoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementosDelDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
