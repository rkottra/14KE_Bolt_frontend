import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token:string = "";
  public isLoggedIn = false;

  constructor(private http:HttpClient) { 
    if ( sessionStorage.getItem("token") != null) {
      this.token = sessionStorage.getItem("token")??"";
      this.isLoggedIn = true;
    }
  }

  login(email:string, password:string) {
    this.isLoggedIn = false;

    this.http.post("http://localhost:8000/api/login", {email: email, password:password}).subscribe((data:any) => {
      
      this.token = data.token;
      this.isLoggedIn = true;
      sessionStorage.setItem("token", this.token);
    });
  }

  logoutLocal() {
    this.isLoggedIn = false;
    this.token = "";
    sessionStorage.removeItem("token");
  }

  logout() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer `+this.token
    });

    this.http.post("http://localhost:8000/api/logout", {}, {headers}).subscribe();

    this.logoutLocal();
  }

  /*
  dashboard():Observable<string> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer `+this.token
    })
    return this.http.get<string>("http://localhost:8000/api/dashboard", { headers: headers });
  }*/
}
