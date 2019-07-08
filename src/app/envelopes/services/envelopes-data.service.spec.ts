import { TestBed } from '@angular/core/testing';

import { EnvelopesDataService } from './envelopes-data.service';

describe('EnvelopesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvelopesDataService = TestBed.get(EnvelopesDataService);
    expect(service).toBeTruthy();
  });
});
