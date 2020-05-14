import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FileAnnotationComponent } from './file-annotation-component/file-annotation.component';

@NgModule({
  declarations: [FileAnnotationComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [FileAnnotationComponent]
})
export class FileAnnotationModule { }
