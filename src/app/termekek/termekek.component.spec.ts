import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { TermekekComponent } from './termekek.component';

describe('TermekekComponent', () => {
  let component: TermekekComponent;
  let fixture: ComponentFixture<TermekekComponent>;

  
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [
        TermekekComponent,
      ],
      imports: [
        HttpClientModule,
      ],
      providers: [
        { provide: MatDialog, useValue: {} },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermekekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
