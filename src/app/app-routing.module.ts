import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { CourseClassReadComponent } from './components/views/school/courses-course-classes/course-class-read/course-class-read.component';
import { CourseClassRegistrationComponent } from './components/views/school/courses-course-classes/course-class-registration/course-class-registration.component';
import { MyCourseClassesComponent } from './components/views/school/courses-course-classes/my-course-classes/my-course-classes.component';
import { CoursesReadTeacherComponent } from './components/views/school/courses/courses-read-teacher/courses-read-teacher.component';
import { CoursesReadComponent } from './components/views/school/courses/courses-read/courses-read.component';
import { CoursesWarningComponent } from './components/views/school/courses/courses-warning/courses-warning.component';
import { LoginComponent } from './components/views/user/user-login/login/login.component';
import { TeacherLoginComponent } from './components/views/user/user-login/teacher-login/teacher-login.component';
import { UserLoginComponent } from './components/views/user/user-login/user-ask/user-login.component';
import { UserLogoffComponent } from './components/views/user/user-logoff/user-logoff.component';
import { UserRegisterComponent } from './components/views/user/user-register/student-register/user-register.component';
import { TeacherRegisterComponent } from './components/views/user/user-register/teacher-register/teacher-register.component';
import { UserRegisterAskComponent } from './components/views/user/user-register/user-register-ask/user-register-ask.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'login/student',
    component: LoginComponent
  },
  {
    path: 'login/teacher',
    component: TeacherLoginComponent
  },
  {
    path: 'register',
    component: UserRegisterAskComponent
  },
  {
    path: 'register/student',
    component: UserRegisterComponent
  },
  {
    path: 'register/teacher',
    component: TeacherRegisterComponent
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
    path: 'coursesTeacher',
    component: CoursesReadTeacherComponent
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
