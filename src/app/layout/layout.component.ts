import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
    selector: 'gha-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    gitHubRepository: string;

    constructor() {
    }

    ngOnInit(): void {
        this.gitHubRepository = environment.githubRepository;
    }

}
