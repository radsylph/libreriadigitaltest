import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaduriaComponent } from './contaduria.component';

describe('ContaduriaComponent', () => {
  let component: ContaduriaComponent;
  let fixture: ComponentFixture<ContaduriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContaduriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContaduriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
