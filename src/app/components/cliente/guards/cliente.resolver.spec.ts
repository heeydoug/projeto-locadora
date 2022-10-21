import { TestBed } from '@angular/core/testing';

import { ClienteResolver } from './cliente.resolver';

describe('ClienteResolver', () => {
  let resolver: ClienteResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ClienteResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
