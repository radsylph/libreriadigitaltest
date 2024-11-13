import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreriaDigitalComponent } from './libreria-digital.component';

describe('LibreriaDigitalComponent', () => {
  let component: LibreriaDigitalComponent;
  let fixture: ComponentFixture<LibreriaDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibreriaDigitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibreriaDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
