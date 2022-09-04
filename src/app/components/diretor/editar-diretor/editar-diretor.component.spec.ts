import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDiretorComponent } from './editar-diretor.component';

describe('EditarDiretorComponent', () => {
  let component: EditarDiretorComponent;
  let fixture: ComponentFixture<EditarDiretorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDiretorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDiretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
