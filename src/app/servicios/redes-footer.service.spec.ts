import { TestBed } from '@angular/core/testing';

import { RedesFooterService } from './redes-footer.service';

describe('RedesFooterService', () => {
  let service: RedesFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedesFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
