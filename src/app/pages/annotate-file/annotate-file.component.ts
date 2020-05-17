import { Component, OnInit } from '@angular/core';
import { IImageWithOCRCoordinates } from '@notejang/file-annotation';
import { ApiService } from 'src/app/shared/services/api.service';
import { INote } from 'src/app/shared/models/INote';

@Component({
  selector: 'app-annotate-file',
  templateUrl: './annotate-file.component.html',
  styleUrls: ['./annotate-file.component.scss']
})
export class AnnotateFileComponent implements OnInit {
  note: INote;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  handleImageLoadedWithOCRCoordinatesEvent(imageWithOCRResult: IImageWithOCRCoordinates) {
    this.note = {
      imageWithOCRResult,
      title: imageWithOCRResult.file.name
    };
  }

  saveAsNote() {
    this.api.addNote(this.note);
  }
}
