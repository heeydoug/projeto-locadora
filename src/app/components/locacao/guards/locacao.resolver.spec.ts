import { TestBed } from '@angular/core/testing';

import { LocacaoResolver } from './locacao.resolver';

describe('LocacaoResolver', () => {
  let resolver: LocacaoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LocacaoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
