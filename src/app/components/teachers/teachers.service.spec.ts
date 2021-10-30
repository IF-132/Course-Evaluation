import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TeachersService } from './teachers.service';

describe('TeachersService', () => {
  let service: TeachersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [service],
    });
    service = TestBed.inject(TeachersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
