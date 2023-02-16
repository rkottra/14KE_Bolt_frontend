import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  dashboard():Observable<string> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer 8|DFq3RUcIogXQ1B1K1KxG7QunaKiwBw5VzOI4U6NH`
    })
    return this.http.get<string>("http://localhost:8000/api/dashboard", { headers: headers });
  }

  

}

