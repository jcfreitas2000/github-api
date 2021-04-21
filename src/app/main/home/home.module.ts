import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {SearchModule} from '../search/search.module';
import {UserCardModule} from '../user-card/user-card.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        SearchModule,
        UserCardModule
    ]
})
export class HomeModule {
}
