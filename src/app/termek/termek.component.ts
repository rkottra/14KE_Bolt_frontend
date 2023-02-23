import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TermekModel } from '../models/termek-model';

@Component({
  selector: 'app-termek',
  templateUrl: './termek.component.html',
  styleUrls: ['./termek.component.scss']
})
export class TermekComponent implements OnInit {

  public termek:TermekModel | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: TermekModel) { 
    this.termek = this.data;
  }

  ngOnInit(): void {
  }

}
