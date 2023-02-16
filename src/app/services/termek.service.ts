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
      'Authorization': `Bearer 9|AvZHeQJlM6be25LdvVm2BVbms6o4ZU0DjDSCUHNW`
    })
    return this.http.get<string>("http://localhost:8000/api/dashboard", { headers: headers });
  }

  

}

