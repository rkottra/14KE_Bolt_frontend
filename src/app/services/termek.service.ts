import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { KategoriaModel } from '../models/kategoria-model';
import { TermekModel } from '../models/termek-model';


@Injectable({
  providedIn: 'root'
})
export class TermekService {

  constructor(private http:HttpClient) { 
  }


  selectKategoriak():Observable<KategoriaModel[]> {
    return this.http.get<KategoriaModel[]>("http://localhost:8000/api/kategoria");
  }
  selectTermek():Observable<TermekModel[]> {
    return this.http.get<TermekModel[]>("http://localhost:8000/api/termek");
  }

  updateTermek(termek: TermekModel) {
    return this.http.patch("http://localhost:8000/api/termek/"+termek.id, termek);
  }

  insertTermek(termek: TermekModel) {
    let seged = {
      nev : termek.nev,
      ar : termek.ar,
      leiras : termek.leiras,
      kedvezmeny : termek.kedvezmeny,
      kategoriaid : termek.kategoriaid,
    }
    return this.http.post("http://localhost:8000/api/termek", seged);
  }

  deleteTermek(termek: TermekModel) {
    return this.http.delete("http://localhost:8000/api/termek/"+termek.id);
  }
}

