import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TermekModel } from '../models/termek-model';

@Injectable({
  providedIn: 'root'
})
export class TermekService {

  constructor(private http:HttpClient) { }

  index():Observable<TermekModel[]> {
    return this.http.get<TermekModel[]>("http://localhost:8000/api/termek");
  }
}
