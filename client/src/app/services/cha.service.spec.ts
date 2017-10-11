import { TestBed, inject } from '@angular/core/testing';

import { ChaService } from './cha.service';

describe('ChaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChaService]
    });
  });

  it('should be created', inject([ChaService], (service: ChaService) => {
    expect(service).toBeTruthy();
  }));
});
