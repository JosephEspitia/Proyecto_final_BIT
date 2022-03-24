import { TestBed } from '@angular/core/testing';

import { RoutGuardGuard } from './rout-guard.guard';

describe('RoutGuardGuard', () => {
  let guard: RoutGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoutGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
