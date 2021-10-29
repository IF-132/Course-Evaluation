import { TestBed } from '@angular/core/testing';

import { UPDataService } from './u-p-data.service';

describe('UPDataService', () => {
  let service: UPDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UPDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
