import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Note } from 'src/app/model/note';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  editForm: FormGroup;
  noteId: string;


  constructor(
    public activatedRoute: ActivatedRoute,
    public notesService: NotesService,
    public toastService: ToastrService,
    public fb: FormBuilder,
    public commanService: CommanService
  ) {

    this.noteId = this.activatedRoute.snapshot.paramMap.get('id');
    this.commanService.editPost.subscribe((data: any) => {
      console.log('data', data);
      this.editForm.controls.title.setValue(data.title);
      this.editForm.controls.body.setValue(data.body);
    });
  }


  ngOnInit() {
    this.editForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });

    this.commanService.editPost.subscribe((data: any) => {
      console.log('data', data);
      this.editForm.controls.title.setValue(data.title);
      this.editForm.controls.body.setValue(data.body);
    });
  }

  updateNote() {
    if (this.editForm.valid) {
      this.notesService.updatePost(this.noteId, this.editForm.value.title, this.editForm.value.body);
    } else {
      this.editForm.controls.title.markAsTouched();
      this.editForm.controls.body.markAsTouched();
    }
  }

}
