import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosasBienesDerechosRealesComponent } from './cosas-bienes-derechos-reales.component';

describe('CosasBienesDerechosRealesComponent', () => {
  let component: CosasBienesDerechosRealesComponent;
  let fixture: ComponentFixture<CosasBienesDerechosRealesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CosasBienesDerechosRealesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CosasBienesDerechosRealesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
