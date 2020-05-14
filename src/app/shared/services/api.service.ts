import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { INote } from "../models/INote";
import { Observable } from "rxjs";

/** Service for handling all interactions with the API.
 * @export
 * @class ApiService
 */
@Injectable({
  providedIn: "root"
})
export class ApiService {
  private apiBaseUrl = "/api/";

  constructor(private httpClient: HttpClient) {}

  private formateDate = (datetime: string) => new Date().toString();
  private formatNote = (note: INote) => {
    const updatedNote: INote = {
      ...note,
      insertedUtc: new Date().toString(), //this.formateDate(note.insertedUtc),
      updatedUtc: new Date().toString() //this.formateDate(note.updatedUtc)
    };
    return updatedNote;
  };

  /** Retrieves all notes from the API.
   * @returns {Observable<INote[]>}
   */
  public getNotes(): Observable<INote[]> {
    return this.httpClient
      .get(`${this.apiBaseUrl}notes`)
      .pipe(
        map((response: any[]) =>
          response.map(note => this.formatNote(note))
        )
      );
  }

  /** Retrieves the note information for the specified id.
   * @param {string} id
   * @returns {Observable<INote>
   */
  public getNote(id: string): Observable<INote> {
    return this.httpClient
      .get(`${this.apiBaseUrl}notes/${id}`)
      .pipe(map((note: INote) => this.formatNote(note)));
  }

  /** Creates a new note via the API.
   * @param {INote} note
   * @returns {Observable<INote>} The information for the newly created note.
   */
  public addNote(note: INote): Observable<INote> {
    return this.httpClient
      .post(`${this.apiBaseUrl}notes`, note)
      .pipe(map((note: INote) => this.formatNote(note)));
  }

  /** Updates the note information via the API
   * @param {INote} note
   * @returns {Observable<INote>} The information for the newly updated note.
   */
  public updateNote(note: INote): Observable<INote> {
    return this.httpClient
      .put(`${this.apiBaseUrl}notes/${note.id}`, note)
      .pipe(map((note: INote) => this.formatNote(note)));
  }
}
