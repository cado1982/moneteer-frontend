import { TestBed } from '@angular/core/testing';

import { AssignIncomeService } from './assign-income.service';

describe('AssignIncomeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignIncomeService = TestBed.get(AssignIncomeService);
    expect(service).toBeTruthy();
  });
});
