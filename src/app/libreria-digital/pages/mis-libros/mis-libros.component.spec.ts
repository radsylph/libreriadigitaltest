import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisLibrosComponent } from './mis-libros.component';

describe('MisLibrosComponent', () => {
  let component: MisLibrosComponent;
  let fixture: ComponentFixture<MisLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisLibrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
