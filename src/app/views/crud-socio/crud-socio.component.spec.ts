import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSocioComponent } from './crud-socio.component';

describe('CrudSocioComponent', () => {
  let component: CrudSocioComponent;
  let fixture: ComponentFixture<CrudSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudSocioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
