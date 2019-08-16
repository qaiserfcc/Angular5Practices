import { TestBed } from '@angular/core/testing';

import { DemoserviceService } from './demoservice.service';

describe('DemoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoserviceService = TestBed.get(DemoserviceService);
    expect(service).toBeTruthy();
  });
});
