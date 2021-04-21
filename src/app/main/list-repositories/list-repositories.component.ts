import {Component, Input, OnInit} from '@angular/core';
import {Repository} from '../model/repository';

@Component({
    selector: 'gha-list-repositories',
    templateUrl: './list-repositories.component.html',
    styleUrls: ['./list-repositories.component.scss']
})
export class ListRepositoriesComponent implements OnInit {

    @Input() loading: boolean;
    @Input() title: string;
    @Input() repositories: Repository[];

    constructor() {
    }

    ngOnInit(): void {
    }

}
