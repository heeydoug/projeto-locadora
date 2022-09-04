import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LerClasseComponent } from './ler-classe.component';

describe('LerClasseComponent', () => {
  let component: LerClasseComponent;
  let fixture: ComponentFixture<LerClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LerClasseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LerClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
