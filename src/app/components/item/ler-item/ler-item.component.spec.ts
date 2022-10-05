import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LerItemComponent } from './ler-item.component';

describe('LerItemComponent', () => {
  let component: LerItemComponent;
  let fixture: ComponentFixture<LerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LerItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
