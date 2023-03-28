import { TestBed } from '@angular/core/testing';

import { GetPopularTagsService } from './get-popular-tags.service';

describe('GetPopularTagsService', () => {
  let service: GetPopularTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPopularTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
