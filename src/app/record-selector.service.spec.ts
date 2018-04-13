import { TestBed, inject } from '@angular/core/testing';

import { RecordSelectorService } from './record-selector.service';

describe('RecordSelectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecordSelectorService]
    });
  });

  it('should be created', inject([RecordSelectorService], (service: RecordSelectorService) => {
    expect(service).toBeTruthy();
  }));
});
