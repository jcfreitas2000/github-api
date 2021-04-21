import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../main/model/user';
import {environment} from '../../../environments/environment';
import {Repository} from '../../main/model/repository';

@Injectable({
    providedIn: 'root'
})
export class GithubApiService {

    constructor(
        private http: HttpClient
    ) {
    }

    authUser(): Observable<User> {
        return this.http.get<User>(`${environment.githubBaseApiUrl}/user`);
    }

    userProfile(user: string): Observable<User> {
        return this.http.get<User>(`${environment.githubBaseApiUrl}/users/${user}`);
    }

    userRepositories(user: string): Observable<Repository> {
        return this.http.get<Repository>(`${environment.githubBaseApiUrl}/users/${user}/repos`);
    }

    userStarred(user: string): Observable<Repository> {
        return this.http.get<Repository>(`${environment.githubBaseApiUrl}/users/${user}/starred`);
    }
}
