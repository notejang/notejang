import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAnnotationComponent } from './file-annotation.component';

describe('FileAnnotationComponent', () => {
  let component: FileAnnotationComponent;
  let fixture: ComponentFixture<FileAnnotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileAnnotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileAnnotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
