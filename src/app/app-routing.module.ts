import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { MainComponent } from './main/main.component';
import { ProjectRegisterComponent } from "./project-register/project-register.component";
import { UserPageComponent } from "./user-page/user-page.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProjectPageComponent } from "./project-page/project-page.component";
import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [
  {path:'home', component:MainComponent},
  {path:'project/:id', component:ProjectPageComponent},
  {path:'projectregister', component: ProjectRegisterComponent, canActivate: [AuthGuard]},
  {path:'userlogin', component: LoginComponent},
  {path:'userregister', component: RegisterComponent},
  {path: 'user', component:UserPageComponent, canActivate: [AuthGuard]},
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
