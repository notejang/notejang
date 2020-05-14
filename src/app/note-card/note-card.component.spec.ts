import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCardComponent } from './note-card.component';
import { TimeagoModule, TimeagoFormatter, TimeagoClock } from 'ngx-timeago';

describe('NoteCardComponent', () => {
  let component: NoteCardComponent;
  let fixture: ComponentFixture<NoteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteCardComponent ],
      providers: [TimeagoFormatter, TimeagoClock],
      imports: [TimeagoModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
