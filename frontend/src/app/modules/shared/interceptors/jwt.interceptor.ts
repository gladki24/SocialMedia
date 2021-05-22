import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {JwtService} from "../services/jwt.service";
import {isNullOrEmpty} from "../utils";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
      private readonly jwtService: JwtService
  ) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.jwtService.getToken();

    if (!isNullOrEmpty(token)) {
      const jwtRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });

      return next.handle(jwtRequest);
    } else {
      return next.handle(request);
    }
  }
}
