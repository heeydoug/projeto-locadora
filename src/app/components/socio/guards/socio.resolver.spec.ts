import { TestBed } from '@angular/core/testing';

import { SocioResolver } from './socio.resolver';

describe('SocioResolver', () => {
  let resolver: SocioResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SocioResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
