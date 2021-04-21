import {Component, Input, OnInit} from '@angular/core';
import {Repository} from '../../model/repository';

@Component({
    selector: 'gha-list-repositories-item',
    templateUrl: './list-repositories-item.component.html',
    styleUrls: ['./list-repositories-item.component.scss']
})
export class ListRepositoriesItemComponent implements OnInit {

    @Input() repository: Repository;

    constructor() {
    }

    ngOnInit(): void {
    }
}
