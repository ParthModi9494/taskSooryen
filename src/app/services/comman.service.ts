import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommanService {
  public editPost = new Subject();
  constructor() { }
}
