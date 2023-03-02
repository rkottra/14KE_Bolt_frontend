import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TermekModel } from '../models/termek-model';
import { LoginService } from '../services/login.service';
import { TermekService } from '../services/termek.service';
import { TermekComponent } from '../termek/termek.component';

@Component({
  selector: 'app-termekek',
  templateUrl: './termekek.component.html',
  styleUrls: ['./termekek.component.scss']
})
export class TermekekComponent implements OnInit {



  public displayedColumns: string[] = ['gombok', 'nev', 'ar', 'kedvezmeny', 'csokkentett_ar', 'kepUrl'];
  public dataSource = new MatTableDataSource<TermekModel>();
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public searchField:string = "";

  constructor(private termekszerviz:TermekService, public loginszerviz:LoginService,public dialog: MatDialog) {
    this.dataSource.filterPredicate = (data, filter) => {
      return data.nev.toLowerCase().indexOf(filter) > -1 || data.ar.toString().indexOf(filter) > -1;
    };
    
    this.FrissitesBackendrol();
   }

  private FrissitesBackendrol() {
    this.termekszerviz.selectTermek().subscribe(data => {
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

  frissit(termek:TermekModel) {
    const dialogRef = this.dialog.open(TermekComponent, {
      data: termek,
      height: '800px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.termekszerviz.updateTermek(result).subscribe();
    });
  }

  torles(termek:TermekModel) {
    this.termekszerviz.deleteTermek(termek).subscribe(
      ()=>{
        this.FrissitesBackendrol();
      }
    );
  }

  ujtermek() {
    const dialogRef = this.dialog.open(TermekComponent, {
      height: '800px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.termekszerviz.insertTermek(result).subscribe(
        () => {
          this.FrissitesBackendrol();
        }
      );
      
    });
  }
    
}
