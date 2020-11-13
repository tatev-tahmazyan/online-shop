import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username = '';
  public password = '';

  public isAdminLogIn = false;

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    
    if ((this.username === 'admin') && (this.password === 'admin')) {
      this.isAdminLogIn = true;
       
    } else {
      this.isAdminLogIn = false;
    }
  }
}
