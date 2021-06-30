import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ProjectRegisterComponent } from "./project-register/project-register.component";
import { UserPageComponent } from "./user-page/user-page.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProjectPageComponent } from "./project-page/project-page.component";
// import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [
  {path:'home', component:MainComponent},
  {path:'project/register', component: ProjectRegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'project', component:ProjectPageComponent},
  {path: 'user', component:UserPageComponent},
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  // {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
