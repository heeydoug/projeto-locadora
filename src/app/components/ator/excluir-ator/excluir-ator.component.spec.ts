import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirAtorComponent } from './excluir-ator.component';

describe('ExcluirAtorComponent', () => {
  let component: ExcluirAtorComponent;
  let fixture: ComponentFixture<ExcluirAtorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirAtorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirAtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
