import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNoteComponent } from './update-note.component';
import { ApiService } from '../../shared/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NotificationsService } from '../../shared/services/notifications.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

describe('UpdateNoteComponent', () => {
  let component: UpdateNoteComponent;
  let fixture: ComponentFixture<UpdateNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNoteComponent ],
      providers: [ApiService, NotificationsService],
      imports: [HttpClientModule, MatSnackBarModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
