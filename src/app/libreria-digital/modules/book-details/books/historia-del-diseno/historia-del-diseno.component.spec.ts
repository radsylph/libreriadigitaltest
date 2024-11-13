import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaDelDisenoComponent } from './historia-del-diseno.component';

describe('HistoriaDelDisenoComponent', () => {
  let component: HistoriaDelDisenoComponent;
  let fixture: ComponentFixture<HistoriaDelDisenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoriaDelDisenoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoriaDelDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
