import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Note } from 'src/app/model/note';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  public posts: any[];
  public postToEdit: any = null;
  constructor(
    public notesService: NotesService,
    public router: Router,
    public toastr: ToastrService,
    public toastService: ToastrService,
    public commanService: CommanService) { }

  ngOnInit() {

    this.notesService.getPosts().subscribe(actionArray => {
      this.posts = actionArray.map(post => {
        return {
          id: post.payload.doc.id,
          ...post.payload.doc.data()
        };
      });

    });

  }
  editPost(note: Note) {
    this.router.navigate(['edit', note.id]);
    this.commanService.editPost.next(note);
  }

  deletePost(note: Note) {
    this.notesService.deletePost(note.id).then(() => {
      this.toastr.success('Note Deleted Successfully!');
      console.log(this.posts.length);
      if (this.posts.length < 1) {
        this.router.navigate(['create']);
      }
    }).catch((err) => {
      this.toastr.error(err.message);
    });
  }

}
