import { TestBed } from '@angular/core/testing';

import { SfreyjaService } from './sfreyja.service';

describe('SfreyjaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SfreyjaService = TestBed.get(SfreyjaService);
    expect(service).toBeTruthy();
  });
});
