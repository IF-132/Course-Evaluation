import { TestBed } from '@angular/core/testing';

import { TotalInfoService } from './total-info.service';

describe('TotalInfoService', () => {
  let service: TotalInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
