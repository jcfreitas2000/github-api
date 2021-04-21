import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {GithubApiService} from '../../shared/services/github-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {Repository} from '../model/repository';
import {Observable} from 'rxjs';

@Component({
    selector: 'gha-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    loading = false;

    searchValue: string;
    user: User;
    repositoriesListTitle: string;
    repositories: Repository[];
    repositoriesLoading = false;

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
        this.repositories = null;
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

    findRepositories(): void {
        this.findRepositoriesD('Repositories', this.githubApiService.userRepositories.bind(this.githubApiService));
    }

    findFavorites(): void {
        this.findRepositoriesD('Favorite repositories', this.githubApiService.userStarred.bind(this.githubApiService));
    }

    private findRepositoriesD(title: string, serviceMethod: (user: string) => Observable<Repository[]>): void {
        this.repositoriesLoading = true;
        this.repositoriesListTitle = title;

        serviceMethod(this.user.login)
            .pipe(finalize(() => this.repositoriesLoading = false))
            .subscribe(data => this.repositories = data);
    }
}
