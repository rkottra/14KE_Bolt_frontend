import { Component, OnInit } from '@angular/core';
import { TermekService } from '../services/termek.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public valtozo:string = "asd";

  constructor(private backend:TermekService) { }

  ngOnInit(): void {
  }

  kattint() {
    
      this.backend.dashboard().subscribe((data)=> {
        this.valtozo = data;
      })
  }

}
