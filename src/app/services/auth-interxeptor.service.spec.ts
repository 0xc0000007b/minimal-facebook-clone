import { TestBed } from '@angular/core/testing';

import { AuthInterxeptorService } from './auth-interxeptor.service';

describe('AuthInterxeptorService', () => {
  let service: AuthInterxeptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthInterxeptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
