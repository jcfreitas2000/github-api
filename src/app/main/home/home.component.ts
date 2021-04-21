import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {GithubApiService} from '../services/github-api.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'gha-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    searchValue: string;
    user$: Observable<User>;

    constructor(
        private githubApiService: GithubApiService
    ) {
    }

    ngOnInit(): void {
    }

    search(searchValue: string): void {
        this.searchValue = searchValue;

        if (searchValue) {
            this.user$ = this.githubApiService.userProfile(searchValue);
        }
    }
}
