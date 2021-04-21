import {TestBed} from '@angular/core/testing';

import {GithubApiService} from './github-api.service';
import {AppModule} from '../../app.module';

describe('GithubApiService', () => {
    let service: GithubApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        });
        service = TestBed.inject(GithubApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
