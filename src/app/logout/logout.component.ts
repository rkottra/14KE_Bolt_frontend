import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { TermekService } from '../services/termek.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  

  constructor(public loginszerviz:LoginService) { }

  ngOnInit(): void {
  }

  sendLogout() {
    this.loginszerviz.logout();
  }

}
