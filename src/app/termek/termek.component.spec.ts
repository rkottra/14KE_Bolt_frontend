import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

import { TermekComponent } from './termek.component';

describe('TermekComponent', () => {
  let component: TermekComponent;
  let fixture: ComponentFixture<TermekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermekComponent ],
      imports: [
        HttpClientModule
      ],
      
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
