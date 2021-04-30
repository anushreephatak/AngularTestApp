import { Routes } from '@angular/router';
import { Page1Component } from 'app/pages/page1/page1.component';
import { Page2Component } from 'app/pages/page2/page2.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'page1',        component: Page1Component },
    { path: 'page2',        component: Page2Component }
];
