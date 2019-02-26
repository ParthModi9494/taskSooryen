import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  public collectionName = 'posts';
  constructor(public afs: AngularFirestore) { }

  getPost(id: string) {
    return this.afs.collection(this.collectionName).doc(id).ref.get();

  }

  getPosts() {
    return this.afs.collection(this.collectionName).snapshotChanges();
  }

  addPost(title: string, body: string) {
    return this.afs.collection(this.collectionName).add({ title, body });
  }

  updatePost(id, title: string, body: string) {
    return this.afs.collection(this.collectionName).doc(id).update({ title, body });
  }

  deletePost(id: string) {
    return this.afs.collection(this.collectionName).doc(id).delete();
  }
}
