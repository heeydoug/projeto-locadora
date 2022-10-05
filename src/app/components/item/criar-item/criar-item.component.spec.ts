import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarItemComponent } from './criar-item.component';

describe('CriarItemComponent', () => {
  let component: CriarItemComponent;
  let fixture: ComponentFixture<CriarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
