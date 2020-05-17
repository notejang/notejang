export interface IImageWithOCRCoordinates {
  base64Image: string;
  file: File;
  ocrResult: Tesseract.Line[];
}
