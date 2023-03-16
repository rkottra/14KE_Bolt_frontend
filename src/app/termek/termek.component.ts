import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KategoriaModel } from '../models/kategoria-model';
import { TermekModel } from '../models/termek-model';
import { TermekService } from '../services/termek.service';

@Component({
  selector: 'app-termek',
  templateUrl: './termek.component.html',
  styleUrls: ['./termek.component.scss']
})
export class TermekComponent implements OnInit {

  public termek:TermekModel = 
    {nev:'', ar:0, id:-1, kedvezmeny:0, kepUrl:'', leiras:'',kategoriaid:1};
  public kategoriak: KategoriaModel[] = [];

  constructor(
    public dialogRef: MatDialogRef<TermekComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TermekModel,
    private termekszerviz: TermekService) { 

    if (this.data !== null) {
      this.termek.ar = this.data.ar;
      this.termek.id = this.data.id;
      this.termek.kategoriaid = this.data.kategoriaid;
      this.termek.kedvezmeny = this.data.kedvezmeny;
      this.termek.kepUrl = this.data.kepUrl;
      this.termek.leiras = this.data.leiras;
      this.termek.nev = this.data.nev;
    }

    this.termekszerviz.selectKategoriak().subscribe((data)=>{
      this.kategoriak = data;
    });

  }

  ngOnInit(): void {
  }
}
