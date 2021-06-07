import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestPasswordComponent } from './request-password/request-password.component';

const routes: Routes = [{
    path: '',
    component: AuthComponent,
    children: [
        {
            path: 'login'
            , component: LoginComponent
        }
        , {
            path: 'register'
            , component: RegisterComponent
        }
        , {
            path: 'request-password'
            , component: RequestPasswordComponent
        }
        , {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full',
            children: []
        }
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)]
    , exports: [RouterModule]
})
export class AuthRoutingModule {

}