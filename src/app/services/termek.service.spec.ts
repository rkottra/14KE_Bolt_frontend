import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TermekService } from './termek.service';

describe('TermekService', () => {
  let service: TermekService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(TermekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
