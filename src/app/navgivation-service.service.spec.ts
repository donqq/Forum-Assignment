import { TestBed, inject } from '@angular/core/testing';

import { NavgivationServiceService } from './navgivation-service.service';

describe('NavgivationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavgivationServiceService]
    });
  });

  it('should be created', inject([NavgivationServiceService], (service: NavgivationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
