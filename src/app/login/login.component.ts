import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { TermekService } from '../services/termek.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public email: string = "valaki@jedlik.eu";
  public password: string = "";

  constructor(public loginszerviz:LoginService) { }

  ngOnInit(): void {
  }

  sendLogin() {
    this.loginszerviz.login(this.email, this.password);
  }
}
