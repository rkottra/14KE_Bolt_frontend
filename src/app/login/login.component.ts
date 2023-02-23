import { Component, OnInit } from '@angular/core';
import { TermekService } from '../services/termek.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public email: string = "valaki@jedlik.eu";
  public password: string = "";

  sendLogin() {
    this.backend.login(this.email, this.password);
  }

  constructor(public backend:TermekService) { }

  ngOnInit(): void {
  }

}
