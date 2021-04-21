import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'gha-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    searchValue: string;

    constructor() {
    }

    ngOnInit(): void {
    }

    search(searchValue: string): void {
        this.searchValue = searchValue;
    }
}
