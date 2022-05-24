import { TestBed } from '@angular/core/testing';

import { ReshmaPwValidatorService } from './reshma-pw-validator.service';

describe('ReshmaPwValidatorService', () => {
  let service: ReshmaPwValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReshmaPwValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
