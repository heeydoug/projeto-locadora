import { TestBed } from '@angular/core/testing';

import { DiretorResolver } from './diretor.resolver';

describe('DiretorResolver', () => {
  let resolver: DiretorResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DiretorResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
