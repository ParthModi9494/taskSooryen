import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { ToastrService } from 'ngx-toastr';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-crete-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  postForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public notesService: NotesService,
    public toaster: ToastrService) { }

  ngOnInit() {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  createNote() {
    if (this.postForm.valid) {

      this.notesService.addPost(this.postForm.value.title, this.postForm.value.body).then((res) => {
        this.toaster.success('Post created Successfully');
        this.postForm.reset();
      }).catch((error) => {
        this.toaster.error(error.message);
      });

    } else {
      this.postForm.controls.title.markAsTouched();
      this.postForm.controls.body.markAsTouched();
    }
  }

}
