import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirItemComponent } from './excluir-item.component';

describe('ExcluirItemComponent', () => {
  let component: ExcluirItemComponent;
  let fixture: ComponentFixture<ExcluirItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
