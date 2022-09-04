import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAtorComponent } from './editar-ator.component';

describe('EditarAtorComponent', () => {
  let component: EditarAtorComponent;
  let fixture: ComponentFixture<EditarAtorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAtorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
