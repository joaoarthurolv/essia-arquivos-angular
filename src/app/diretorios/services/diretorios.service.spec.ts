import { TestBed } from '@angular/core/testing';

import { DiretoriosService } from './diretorios.service';

describe('DiretoriosService', () => {
  let service: DiretoriosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiretoriosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
