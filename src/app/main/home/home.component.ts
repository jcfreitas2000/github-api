import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {GithubApiService} from '../../shared/services/github-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {finalize} from 'rxjs/operators';

@Component({
    selector: 'gha-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    loading = false;

    searchValue: string;
    user: User;

    constructor(
        private githubApiService: GithubApiService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.search(this.activatedRoute.snapshot.queryParams.q);
    }

    search(searchValue: string): void {
        this.searchValue = searchValue;
        this.router.navigate(['.'], {queryParams: {q: searchValue}});

        if (searchValue) {
            this.loading = true;
            this.githubApiService.userProfile(searchValue)
                .pipe(finalize(() => this.loading = false))
                .subscribe(
                    user => this.user = user,
                    () => this.user = null
                );
        }
    }
}
