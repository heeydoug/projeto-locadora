import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirDiretorComponent } from './excluir-diretor.component';

describe('ExcluirDiretorComponent', () => {
  let component: ExcluirDiretorComponent;
  let fixture: ComponentFixture<ExcluirDiretorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirDiretorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirDiretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
