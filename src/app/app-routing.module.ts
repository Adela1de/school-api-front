import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { CourseClassReadComponent } from './components/views/school/courses-course-classes/course-class-read/course-class-read.component';
import { CourseClassRegistrationComponent } from './components/views/school/courses-course-classes/course-class-registration/course-class-registration.component';
import { MyCourseClassesComponent } from './components/views/school/courses-course-classes/my-course-classes/my-course-classes.component';
import { CoursesReadComponent } from './components/views/school/courses-read/courses-read.component';
import { CoursesWarningComponent } from './components/views/school/courses-warning/courses-warning.component';
import { LoginComponent } from './components/views/user/user-login/login/login.component';
import { UserLoginComponent } from './components/views/user/user-login/user-ask/user-login.component';
import { UserLogoffComponent } from './components/views/user/user-logoff/user-logoff.component';
import { UserRegisterComponent } from './components/views/user/user-register/user-register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login/ask',
    component: UserLoginComponent
  },
  {
    path: 'login/student',
    component: LoginComponent
  },
  {
    path: 'register/ask',
    component: UserLoginComponent
  },
  {
    path: 'logoff',
    component: UserLogoffComponent
  },
  {
    path: 'courses',
    component: CoursesReadComponent
  },
  {
    path: 'courses/confirm/:id',
    component: CoursesWarningComponent
  },
  {
    path: 'courseClasses',
    component: CourseClassReadComponent
  },
  {
    path: 'courseClasses/confirm/:id',
    component: CourseClassRegistrationComponent
  },
  {
    path: 'myCourseClasses',
    component: MyCourseClassesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
