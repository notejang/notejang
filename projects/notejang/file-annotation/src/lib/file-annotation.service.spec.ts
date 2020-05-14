import { TestBed } from '@angular/core/testing';

import { FileAnnotationService } from './file-annotation.service';

describe('FileAnnotationService', () => {
  let service: FileAnnotationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileAnnotationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
