import { TestBed } from '@angular/core/testing';

import { ClasseResolver } from './classe.resolver';

describe('ClasseResolver', () => {
  let resolver: ClasseResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ClasseResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
