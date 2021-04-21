import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {SearchModule} from '../search/search.module';
import {UserCardModule} from '../user-card/user-card.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ListRepositoriesModule} from '../list-repositories/list-repositories.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        SearchModule,
        UserCardModule,
        MatProgressSpinnerModule,
        ListRepositoriesModule
    ]
})
export class HomeModule {
}
