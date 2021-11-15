import { TestBed } from '@angular/core/testing';

import { GuardiaLinksGuard } from './guardia-links.guard';

describe('GuardiaLinksGuard', () => {
  let guard: GuardiaLinksGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardiaLinksGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
