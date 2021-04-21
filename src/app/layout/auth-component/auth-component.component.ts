import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

@Component({
    selector: 'gha-auth-component',
    templateUrl: './auth-component.component.html',
    styleUrls: ['./auth-component.component.scss']
})
export class AuthComponentComponent implements OnInit, OnDestroy {

    loading = false;
    isAuthorized = false;

    githubAuthUrl = this.authService.authorizeUrl();
    accessTokenSubscription: Subscription;

    constructor(
        private authService: AuthService,
        private activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        const code = this.activatedRoute.snapshot.queryParams.code;

        this.loading = true;
        let accessToken$: Observable<string>;
        if (code) {
            accessToken$ = this.authService.getAccessTokenFromGithub(code);
        } else {
            accessToken$ = this.authService.getAccessToken();
        }
        this.accessTokenSubscription = accessToken$
            .subscribe(data => {
                this.loading = false;
                this.isAuthorized = !!data;
            }, () => this.loading = false);
    }

    logout(): void {
        this.authService.logout();
    }

    ngOnDestroy(): void {
        this.accessTokenSubscription.unsubscribe();
    }
}
