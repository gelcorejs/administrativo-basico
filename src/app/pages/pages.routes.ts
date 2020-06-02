import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Grficas1Component } from './grficas1/grficas1.component';

const pagesRoutes: Routes = [
    { path: '',
    component: PagesComponent,
    children:[
     { path: 'dashboard', component: DashboardComponent },
     { path:'progress', component: ProgessComponent },
     { path:'grafica1', component: Grficas1Component },
     { path: '', redirectTo:'/dashboard', pathMatch: 'full' }
    ]
   },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);