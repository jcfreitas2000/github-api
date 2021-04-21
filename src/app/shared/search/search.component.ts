import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
    selector: 'gha-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

    @Input() searchValue: string;
    @Input() hint: string;

    @Output() searchValueChanges = new EventEmitter<string>();

    searchValue$ = new BehaviorSubject('');

    constructor() {
    }

    ngOnInit(): void {
        this.searchValue$
            .pipe(debounceTime(250))
            .subscribe(value => this.searchValueChanges.emit(value));
    }

    ngOnDestroy(): void {
        this.searchValue$.complete();
    }

}
