import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private backend:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.backend.isLoggedIn) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer `+sessionStorage.getItem("token")
        }
     });
    }
    return next.handle(request);
  }
}
