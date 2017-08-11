import { TestBed, inject } from '@angular/core/testing';

import { TabHistoryDataService } from './tab-history-data.service';

describe('TabHistoryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabHistoryDataService]
    });
  });

  it('should be created', inject([TabHistoryDataService], (service: TabHistoryDataService) => {
    expect(service).toBeTruthy();
  }));
});
