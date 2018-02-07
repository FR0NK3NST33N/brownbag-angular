# BrownbagAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Created Steps
- ran `ng new <app-name> --style scss`
- `ng serve` produced `Cannot find module '@angular-devkit/core'` error
    - ran `npm update -g @angular/core`
    - updated `package.json` from `"@angular/cli": "1.6.4"` to`"@angular/cli": "^1.6.4"`
    - ran `npm update`
- `ng serve`
    - runs on localhost:4200
- take a look at generated folder structer and default components
- add router file `app.routes.ts` to `src/app/`
- add views folder to `src/app/`
    - add home folder to `src/app/views/`
    - add home.component files to `src/app/views/home`
    - add test folder to `src/app/views/`
    - add test.component files to `src/app/views/test`
- add component basic structure to each view .ts file
    - 
    ```
    import { Component, OnInit, Input } from "@angular/core";

    @Component({
        selector: "sijl-home", //Not needed since being rendered by router
        templateUrl: "./home.component.html",
        styleUrls: [ "./home.component.scss" ]
    })
    export class HomeComponent implements OnInit {

        title: string;

        constructor() {}

        ngOnInit() {
            this.title = "home";
        }  
    }
    ```
- took `app.component.html` contents and placed in `/view/home/home.component.html`
- show off default app component and how it is rendering then activar router with basic setup:
    - 
    ```
    import { Routes } from '@angular/router';
    import { HomeComponent } from "./views/home/home.component"; 

    export const appRoutes: Routes = [
        {
        path: '',
        component: HomeComponent
        },
        { path: '**', component: HomeComponent }
    ];
    ```
    - Add router and home component to `app.module.ts`
    - 
    ```
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';

    import { RouterModule, Routes } from '@angular/router';
    import { appRoutes } from './app.router';

    import { AppComponent } from './app.component';
    import { HomeComponent } from './views/home/home.component';
    


    @NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```
- App should not render until we replace `app.component.html` with `<router-outlet></router-outlet>`
- Our new title should now show
- insert home.component contents into test.component files
    - change all references to home in .ts files
- import test component in router config and add route
    - Contents should now look like:
    -
    ```
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
    ```
- app should be broken again since our `app.module` does not know about the testcomponent
    - import test component into `app.module`
- app should know render again
- now lets add a button to route to our new page
    - in our `home.component.html` add `<button routerLink="test" skipLocationChange>view test page</button>`
    - in our `test.component.html` add `<button routerLink="" skipLocationChange>back to home page</button>`

