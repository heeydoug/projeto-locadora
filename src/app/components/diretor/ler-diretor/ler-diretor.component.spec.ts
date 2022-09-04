import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LerDiretorComponent } from './ler-diretor.component';

describe('LerDiretorComponent', () => {
  let component: LerDiretorComponent;
  let fixture: ComponentFixture<LerDiretorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LerDiretorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LerDiretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
