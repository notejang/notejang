import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { INote } from '../../shared/models/INote';
import { Observable } from 'rxjs';
import { NotificationsService } from '../../shared/services/notifications.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  public note$: Observable<INote>;

  constructor(private api: ApiService, private notificationsService: NotificationsService, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(paramMap => {
      const id: string = paramMap.get('id');
      this.note$ = this.api.getNote(id);
    });
  }

  ngOnInit(): void {

  }

  public submitFormHandler(noteInfo: INote) {
    this.api.updateNote(noteInfo).subscribe(result => {
      this.notificationsService.showNotification('Success', `Note ${noteInfo.title} updated successfully!`, 'success');
      this.router.navigate(['/notes']);
    });
  }
}
