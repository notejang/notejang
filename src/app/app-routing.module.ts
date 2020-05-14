import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { AddNoteComponent } from './pages/add-note/add-note.component';
import { UpdateNoteComponent } from './pages/update-note/update-note.component';
import { AnnotateFileComponent } from './pages/annotate-file/annotate-file.component';


const routes: Routes = [
  {
    path: 'notes',
    component: NotesComponent
  },
  { path: '',
    redirectTo: '/notes',
    pathMatch: 'full'
  },
  {
    path: 'add-note',
    component: AddNoteComponent
  },
  {
    path: 'update-note/:id',
    component: UpdateNoteComponent
  },
  {
    path: 'annotate',
    component: AnnotateFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
