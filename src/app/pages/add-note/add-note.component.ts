import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
  ValidatorFn,
} from "@angular/forms";
import { INote } from "../../shared/models/INote";
import { ApiService } from "../../shared/services/api.service";
import { Router } from "@angular/router";
import { NotificationsService } from "../../shared/services/notifications.service";
import { IImageWithOCRCoordinates } from '@notejang/file-annotation';

@Component({
  selector: "app-add-note",
  templateUrl: "./add-note.component.html",
  styleUrls: ["./add-note.component.scss"],
})
export class AddNoteComponent implements OnInit {
  constructor(
    private api: ApiService,
    private notificationService: NotificationsService,
    private router: Router
  ) {}
  note: INote;

  ngOnInit(): void {}

  public submitFormHandler(noteInfo: INote) {
    noteInfo = {...this.note, ...noteInfo};
    noteInfo.id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      (c) => {
        const r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    ); // Used for json-server testing
    this.api.addNote(noteInfo).subscribe((result) => {
      this.notificationService.showNotification(
        "Success",
        `Note ${noteInfo.title} created successfully!`,
        "success"
      );
      this.router.navigate(["/notes"]);
    });
  }

  handleImageLoadedWithOCRCoordinatesEvent(imageWithOCRResult: IImageWithOCRCoordinates) {
    this.note = {
      imageWithOCRResult,
      title: imageWithOCRResult.file.name
    };
  }
}
