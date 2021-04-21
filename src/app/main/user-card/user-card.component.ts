import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../model/user';

@Component({
    selector: 'gha-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

    @Input() searchValue: string;
    @Input() user: User;

    @Output() clickRepositories = new EventEmitter<void>();
    @Output() clickFavorites = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit(): void {
        if (!this.user) {
            throw new Error('User can not be null');
        }
    }

}
