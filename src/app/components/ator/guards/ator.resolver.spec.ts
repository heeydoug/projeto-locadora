import { TestBed } from '@angular/core/testing';

import { AtorResolver } from './ator.resolver';

describe('AtorResolver', () => {
  let resolver: AtorResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AtorResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
