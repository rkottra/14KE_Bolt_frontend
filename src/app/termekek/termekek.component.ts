import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TermekModel } from '../models/termek-model';
import { TermekService } from '../services/termek.service';

@Component({
  selector: 'app-termekek',
  templateUrl: './termekek.component.html',
  styleUrls: ['./termekek.component.scss']
})
export class TermekekComponent implements OnInit {

  public displayedColumns: string[] = ['nev', 'leiras', 'ar', 'kedvezmeny', 'csokkentett_ar', 'kepUrl'];
  public dataSource = new MatTableDataSource<TermekModel>();
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public searchField:string = "";

  constructor(private backend:TermekService) {
    this.dataSource.filterPredicate = (data, filter) => {
      return data.nev.toLowerCase().indexOf(filter) > -1 || data.ar.toString().indexOf(filter) > -1;
    };
    

    this.backend.index().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;  
    });

   }

  ngOnInit(): void {
  }

  filterTable(event:any) {
    this.dataSource.filter = this.searchField.toLowerCase();
  }
}
