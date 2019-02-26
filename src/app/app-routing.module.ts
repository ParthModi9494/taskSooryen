import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNoteComponent } from './notes/create-note/create-note.component';
import { EditNoteComponent } from './notes/edit-note/edit-note.component';


const routes: Routes = [
  { path: 'create', component: CreateNoteComponent },
  { path: 'edit/:id', component: EditNoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
