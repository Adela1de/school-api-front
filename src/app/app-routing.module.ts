import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { CoursesReadComponent } from './components/views/school/courses-read/courses-read.component';
import { LoginComponent } from './components/views/user/login/login.component';
import { UserLogoffComponent } from './components/views/user/user-logoff/user-logoff.component';
import { UserRegisterComponent } from './components/views/user/user-register/user-register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: UserRegisterComponent
  },
  {
    path: 'logoff',
    component: UserLogoffComponent
  },
  {
    path: 'courses',
    component: CoursesReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
