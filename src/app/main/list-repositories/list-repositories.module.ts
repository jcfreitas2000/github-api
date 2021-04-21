import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListRepositoriesComponent} from './list-repositories.component';
import {ListRepositoriesItemComponent} from './list-repositories-item/list-repositories-item.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    declarations: [
        ListRepositoriesComponent,
        ListRepositoriesItemComponent
    ],
    exports: [
        ListRepositoriesComponent
    ],
    imports: [
        CommonModule,
        MatListModule,
        MatIconModule,
        MatProgressSpinnerModule
    ]
})
export class ListRepositoriesModule {
}
