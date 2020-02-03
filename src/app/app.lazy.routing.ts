import { RouterModule,PreloadAllModules,NoPreloading,Routes} from '@angular/router';
import { ModuleWithProviders, Component } from "@angular/core";
import { AfterLoginComponent } from './after-login/after-login.component';
import { SignupComponent } from './signup/signup.component';


import { LoginComponent } from './login/login.component';


const APP_LAZY_ROUTES : Routes = [
    {
        path : 'login' , component : LoginComponent
    },
    {
        path : 'after' , component : AfterLoginComponent
    },
    {
        path : 'signup' , component : SignupComponent
    },

];


export const APP_LAZY_ROUTING : ModuleWithProviders = RouterModule.forRoot(APP_LAZY_ROUTES , {preloadingStrategy:  NoPreloading});