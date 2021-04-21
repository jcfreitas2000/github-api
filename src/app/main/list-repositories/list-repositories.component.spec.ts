import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListRepositoriesComponent} from './list-repositories.component';
import {AppModule} from '../../app.module';
import {ListRepositoriesModule} from './list-repositories.module';

describe('ListRepositoriesComponent', () => {
    let component: ListRepositoriesComponent;
    let fixture: ComponentFixture<ListRepositoriesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppModule, ListRepositoriesModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListRepositoriesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
