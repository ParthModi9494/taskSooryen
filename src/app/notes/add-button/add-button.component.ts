import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  addNote() {
    this.router.navigate(['create']);
  }

}
