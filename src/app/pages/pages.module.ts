
import { NgModule } from '@angular/core';

//Modulos
import { SharedModule } from './../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Grficas1Component } from './grficas1/grficas1.component';
import { PagesComponent } from './pages.component';


@NgModule({
    declarations:[
        DashboardComponent,
        ProgessComponent,
        Grficas1Component,
        PagesComponent
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES
    ],
    exports:[
        DashboardComponent,
        ProgessComponent,
        Grficas1Component,
        PagesComponent 
    ]
})
export class PagesModule{}