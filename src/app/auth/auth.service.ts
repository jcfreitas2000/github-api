import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {GithubAccessTokenResponse} from './github-access-token-response';
import {switchMap, tap} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private accessTokenKey = 'access_token';
    private accessToken$ = new BehaviorSubject<string>(null);

    constructor(
        private http: HttpClient,
        private matSnackBar: MatSnackBar
    ) {
        const accessTokenSaved = localStorage.getItem(this.accessTokenKey);
        if (accessTokenSaved) {
            this.setAccessToken(accessTokenSaved);
        }
    }

    authorizeUrl(): string {
        return `${environment.githubAuthUrl}?client_id=${environment.githubClientId}`;
    }

    getAccessTokenFromGithub(code): Observable<string> {
        return this.http.post<GithubAccessTokenResponse>('http://localhost:3333/auth', {code})
            .pipe(tap(data => this.setAccessToken(data.access_token)))
            .pipe(switchMap(() => this.getAccessToken()));
    }

    getAccessToken(): Observable<string> {
        return this.accessToken$.asObservable();
    }

    getAccessTokenValue(): string {
        return this.accessToken$.value;
    }

    private setAccessToken(accessToken: string): void {
        if (accessToken) {
            this.matSnackBar.open('You are signed in with your GitHub account');
            localStorage.setItem(this.accessTokenKey, accessToken);
        } else {
            localStorage.removeItem(this.accessTokenKey);
        }
        this.accessToken$.next(accessToken);
    }

    logout(): void {
        this.setAccessToken(null);
        this.matSnackBar.open('Successfully sign out you from your GitHub account');
    }
}
