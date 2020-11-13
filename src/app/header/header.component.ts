import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public isUserLogIn = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  animal: string;
  name: string;

  openDialog() {
    this.isUserLogIn = true;
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      data: {name: this.name, animal: this.animal}
    });
  }

  
}
