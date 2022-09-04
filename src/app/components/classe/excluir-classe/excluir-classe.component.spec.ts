import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirClasseComponent } from './excluir-classe.component';

describe('ExcluirClasseComponent', () => {
  let component: ExcluirClasseComponent;
  let fixture: ComponentFixture<ExcluirClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirClasseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
