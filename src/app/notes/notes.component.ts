import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Observable } from 'rxjs';
import { INote } from '../shared/models/INote';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  public notes$ : Observable<INote[]>

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.notes$ = this.api.getNotes();
  }

  openUpdatePage(note: INote) {
    this.router.navigate(['/update-note', JSON.stringify(note)]);
  }
}
