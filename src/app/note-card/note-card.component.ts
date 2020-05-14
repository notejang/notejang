import { Component, OnInit, Input } from '@angular/core';
import { INote } from '../shared/models/INote';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input()
  note: INote;

  constructor() { }

  ngOnInit(): void {
  }

}
