import { TestBed } from '@angular/core/testing';

import { TituloResolver } from './titulo.resolver';

describe('TituloResolver', () => {
  let resolver: TituloResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TituloResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
