import { Routes } from '@angular/router';
import { HomeComponent } from "./views/home/home.component"; 
import { TestComponent } from "./views/test/test.component"; 

export const appRoutes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
        path: 'test',
        component: TestComponent
    },
    { path: '**', component: HomeComponent }
];