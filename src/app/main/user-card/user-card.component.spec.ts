import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserCardComponent} from './user-card.component';
import {AppModule} from '../../app.module';
import {UserCardModule} from './user-card.module';
import {User} from '../model/user';

describe('UserCardComponent', () => {
    let component: UserCardComponent;
    let fixture: ComponentFixture<UserCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppModule, UserCardModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserCardComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        component.user = {} as User;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
