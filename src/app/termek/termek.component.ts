import { Component, Input, OnInit } from '@angular/core';
import { TermekModel } from '../models/termek-model';

@Component({
  selector: 'app-termek',
  templateUrl: './termek.component.html',
  styleUrls: ['./termek.component.css']
})
export class TermekComponent implements OnInit {

  @Input() termek:TermekModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
