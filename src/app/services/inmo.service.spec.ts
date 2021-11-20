import { TestBed } from '@angular/core/testing';

import { InmoService } from './inmo.service';

describe('InmoService', () => {
  let service: InmoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InmoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
