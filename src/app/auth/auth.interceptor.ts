import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService,
    ) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(this.addAuthorizationHeader(request));
    }

    private addAuthorizationHeader(request: HttpRequest<unknown>): HttpRequest<unknown> {
        const accessToken = this.authService.getAccessTokenValue();

        if (accessToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `token ${accessToken}`,
                },
            });
        }

        return request;
    }
}
