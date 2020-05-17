import { IImageWithOCRCoordinates } from '@notejang/file-annotation';

/** Interface representing a Note model.
 * To be used to communicate with the API.*/
export interface INote {
    id?: string;
    title?: string;
    tags?: string[];
    body?: string;
    insertedUtc?: string;
    /** The timestamp that the note was last updated in the repository.
     * Automatically generated.
     */
    updatedUtc?: string;
    imageWithOCRResult?: IImageWithOCRCoordinates;
}
