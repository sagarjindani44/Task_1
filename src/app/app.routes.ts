import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { AccountProComponent } from './account-pro/account-pro.component';

export const routes: Routes = [
    {
        component:CustomerComponent,
        path:'customer'
    },
    {
        component:AccountProComponent,
        path:'account'
    },
    {
        component:HomeComponent,
        path:''
    }
];
