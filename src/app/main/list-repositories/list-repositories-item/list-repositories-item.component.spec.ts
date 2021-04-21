import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListRepositoriesItemComponent} from './list-repositories-item.component';
import {ListRepositoriesModule} from '../list-repositories.module';
import {AppModule} from '../../../app.module';

describe('ListRepositoriesItemComponent', () => {
    let component: ListRepositoriesItemComponent;
    let fixture: ComponentFixture<ListRepositoriesItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ListRepositoriesModule, AppModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListRepositoriesItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
