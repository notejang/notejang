import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotateFileComponent } from './annotate-file.component';

describe('AnnotateFileComponent', () => {
  let component: AnnotateFileComponent;
  let fixture: ComponentFixture<AnnotateFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotateFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotateFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
