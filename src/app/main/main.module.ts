import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {HomeModule} from './home/home.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MainRoutingModule,
        HomeModule
    ]
})
export class MainModule {
}
