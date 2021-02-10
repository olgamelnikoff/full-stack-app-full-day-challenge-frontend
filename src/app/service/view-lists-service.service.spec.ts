import { TestBed } from '@angular/core/testing';

import { ViewListsServiceService } from './view-lists-service.service';

describe('ViewListsServiceService', () => {
  let service: ViewListsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewListsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
