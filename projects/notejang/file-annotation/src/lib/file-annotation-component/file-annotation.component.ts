import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  Input,
} from "@angular/core";
import * as tesseract from "tesseract.js";
import { NgProgressComponent } from "@ngx-progressbar/core";

@Component({
  selector: "notejang-file-annotation",
  templateUrl: "./file-annotation.component.html",
  styleUrls: ["./file-annotation.component.scss"],
})
export class FileAnnotationComponent implements AfterViewInit {
  @ViewChild("fileSelector") fileInput: ElementRef;
  @ViewChild("canvas") canvas: ElementRef;
  @ViewChild("canvasContainer") canvasContainer: ElementRef;

  result: tesseract.Page;
  language = "eng";
  private ctx: CanvasRenderingContext2D;
  public selectedFile: File;
  private image: any;
  private ratio: number;
  public searchText: string;

  constructor(private readonly changeDetectionRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext("2d");
  }

  clickFileSelector() {
    this.fileInput.nativeElement.click();
  }

  async onFileChange(event) {
    this.selectedFile = event.target.files[0];

    this.result = null;

    this.image = new Image();
    this.image.onload = () => this.drawImageScaled(this.image);
    this.image.src = URL.createObjectURL(this.selectedFile);

    tesseract
      .recognize(this.selectedFile, this.language)
      .catch((error) => alert(error))
      .then((result) => {
        if (result) {
          this.result = (result as tesseract.RecognizeResult).data;
        }
      });
    event.target.value = null;
  }

  redrawImage() {
    if (this.image) {
      this.drawImageScaled(this.image);
    }
  }

  drawBBoxOnCanvas(
    bbox: { x0: number; x1: number; y0: number; y1: number },
    tag?: string,
    redraw = true
  ) {
    if (bbox) {
      if (redraw) this.redrawImage();
      this.ctx.strokeStyle = "rgba(255,255,0, 1)";
      this.ctx.fillStyle = "rgba(255,255,0, 0.3)";
      this.ctx.fillRect(
        bbox.x0 * this.ratio,
        bbox.y0 * this.ratio,
        bbox.x1 - bbox.x0,
        bbox.y1 - bbox.y0
      );
      if (tag) {
        this.ctx.lineWidth = 0.5;
        this.ctx.strokeText(
          tag,
          bbox.x0 * this.ratio - 12,
          bbox.y0 * this.ratio - 12
        );
      }
    }
  }

  private drawImageScaled(img) {
    const width = this.canvasContainer.nativeElement.clientWidth;
    const height = this.canvasContainer.nativeElement.clientHeight;

    const hRatio = width / img.width;
    const vRatio = height / img.height;
    this.ratio = Math.min(hRatio, vRatio);
    if (this.ratio > 1) {
      this.ratio = 1;
    }

    this.canvas.nativeElement.width = img.width;
    this.canvas.nativeElement.height = img.height;

    this.ctx.clearRect(0, 0, width, height);
    this.ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      0,
      0,
      img.width * this.ratio,
      img.height * this.ratio
    );
  }

  search() {
    if (!this.result || !this.result.lines) return;
    this.redrawImage();
    const searchTerms = this.searchText.split(" ").map((x) => x.toLowerCase());
    this.result.lines.forEach((line) => {
      line.words.forEach((word, i) => {
        if (searchTerms.indexOf(word.text.toLowerCase()) > -1) {
          this.drawBBoxOnCanvas(
            {
              x0: word.bbox.x0,
              x1: word.bbox.x1,
              y0: word.bbox.y0,
              y1: word.bbox.y1,
            },
            null,
            false
          );
        }
      });
    });
  }
}
