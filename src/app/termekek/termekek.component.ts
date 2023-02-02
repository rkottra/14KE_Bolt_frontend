import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TermekModel } from '../models/termek-model';
import { TermekService } from '../services/termek.service';

@Component({
  selector: 'app-termekek',
  templateUrl: './termekek.component.html',
  styleUrls: ['./termekek.component.css']
})
export class TermekekComponent implements OnInit {

  displayedColumns: string[] = ['nev', 'leiras', 'ar', 'kedvezmeny', 'csokkentett_ar'];

  public termekek:TermekModel[] = [
  ];
/*
  dataSource = new MatTableDataSource<TermekModel>(this.termekek);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }*/

  constructor(private backend:TermekService) {
    this.backend.index().subscribe(data => {
      this.termekek = data;
    })
   }

  ngOnInit(): void {
  }

}
