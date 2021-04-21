import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {environment} from '../../../environments/environment';
import {Repository} from '../model/repository';

@Injectable({
    providedIn: 'root'
})
export class GithubApiService {

    constructor(
        private http: HttpClient
    ) {
    }

    userProfile(user: string): Observable<User> {
        return this.http.get<User>(`${environment.githubApiUrl}/users/${user}`);
    }

    userRepositories(user: string): Observable<Repository> {
        return this.http.get<Repository>(`${environment.githubApiUrl}/users/${user}/repos`);
    }

    userStarred(user: string): Observable<Repository> {
        return this.http.get<Repository>(`${environment.githubApiUrl}/users/${user}/starred`);
    }
}
