import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import {NavigatorService} from "./navigator.service";
import {JwtService} from "./jwt.service";
import {UserService} from "./user.service";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    public constructor(
        private readonly _navigator: NavigatorService,
        private readonly _jwtService: JwtService,
        private readonly _userService: UserService
    ) {
    }

    public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 || error.status === 403) {
                    this._jwtService.clearToken();
                    this._userService.clearUserProfile();
                    this._navigator.login();
                }

                return throwError(error);
            })
        )
    }
}
