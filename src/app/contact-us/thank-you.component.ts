import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-contact-us',
  template: `<h1 mat-dialog-title style="color:pink;">Thank You</h1>`,
})
export class ThankYouComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    // this.dialogRef.close();
  }
}
