import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {debounceTime, filter} from 'rxjs/operators';

@Component({
    selector: 'gha-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

    @Input() searchValue: string;
    @Input() hint: string;

    @Output() searchValueChanges = new EventEmitter<string>();

    searchValue$: BehaviorSubject<string>;

    private lastSearchValueEmitted: string;

    constructor() {
    }

    ngOnInit(): void {
        this.lastSearchValueEmitted = this.searchValue;
        this.searchValue$ = new BehaviorSubject(this.searchValue);
        this.searchValue$
            .pipe(debounceTime(250))
            .pipe(filter(value => value !== this.lastSearchValueEmitted))
            .subscribe(value => {
                this.searchValueChanges.emit(value);
                this.lastSearchValueEmitted = value;
            });
    }

    ngOnDestroy(): void {
        this.searchValue$.complete();
    }

}
