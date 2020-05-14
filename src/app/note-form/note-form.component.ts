import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { INote } from "../shared/models/INote";

@Component({
  selector: "app-note-form",
  templateUrl: "./note-form.component.html",
  styleUrls: ["./note-form.component.scss"],
})
export class NoteFormComponent implements OnInit {
  @Input()
  isUpdate = false;

  @Input()
  public note: INote;

  @Output()
  public submitFormEvent: EventEmitter<INote> = new EventEmitter<INote>();

  public noteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (!this.note)
      this.note = {
        title: "",
        tags: [],
        body: "",
        insertedUtc: "",
        updatedUtc: "",
      };

    this.noteForm = this.formBuilder.group({
      id: this.note.id,
      title: [
        this.note.title,
        [Validators.required, Validators.maxLength(100)],
      ],
      body: [this.note.body, [Validators.required, Validators.maxLength(1000)]],
    });
  }

  public onSubmit(noteInfo: INote) {
    this.submitFormEvent.emit(noteInfo);
  }
}
