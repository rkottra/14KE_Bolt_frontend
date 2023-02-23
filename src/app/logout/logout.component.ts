import { Component, OnInit } from '@angular/core';
import { TermekService } from '../services/termek.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  

  constructor(public backend:TermekService) { }

  ngOnInit(): void {
  }

  sendLogout() {
    this.backend.logout();
  }

}
