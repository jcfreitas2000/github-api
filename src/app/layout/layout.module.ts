import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import { AuthComponentComponent } from './auth-component/auth-component.component';

@NgModule({
    declarations: [
        LayoutComponent,
        AuthComponentComponent
    ],
    exports: [
        LayoutComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        RouterModule
    ]
})
export class LayoutModule {
}
