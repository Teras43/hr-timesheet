import { TestBed } from '@angular/core/testing';

import { DepartmentsGuard } from './departments.guard';

describe('DepartmentsGuard', () => {
  let guard: DepartmentsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DepartmentsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
