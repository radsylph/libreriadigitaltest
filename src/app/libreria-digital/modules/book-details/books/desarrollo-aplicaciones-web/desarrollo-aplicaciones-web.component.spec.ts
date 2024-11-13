import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloAplicacionesWebComponent } from './desarrollo-aplicaciones-web.component';

describe('DesarrolloAplicacionesWebComponent', () => {
  let component: DesarrolloAplicacionesWebComponent;
  let fixture: ComponentFixture<DesarrolloAplicacionesWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesarrolloAplicacionesWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesarrolloAplicacionesWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
