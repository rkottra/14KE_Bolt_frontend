import { Component, OnInit } from '@angular/core';
import { TermekService } from '../services/termek.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private backend:TermekService) { }

  ngOnInit(): void {
  }

  /*kattint() {
      this.valtozo = "";
      
      this.backend.dashboard().subscribe((data:any)=> {
        console.log(data);
        this.valtozo = data.valasz;
      },
      (err) => {
        console.error(err);
        this.backend.logoutLocal();
      })
  }*/

}
