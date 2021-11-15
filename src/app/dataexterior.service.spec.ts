import { TestBed } from '@angular/core/testing';

import { DataexteriorService } from './dataexterior.service';

describe('DataexteriorService', () => {
  let service: DataexteriorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataexteriorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
