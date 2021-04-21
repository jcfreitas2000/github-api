import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserCardComponent} from './user-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
        UserCardComponent
    ],
    exports: [
        UserCardComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class UserCardModule {
}
