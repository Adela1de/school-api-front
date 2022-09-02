import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './components/views/home/home.component';
import { LoginComponent } from './components/views/user/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserRegisterComponent } from './components/views/user/user-register/user-register.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { UserLogoffComponent } from './components/views/user/user-logoff/user-logoff.component';
import { CoursesReadComponent } from './components/views/school/courses-read/courses-read.component';
import {MatTableModule} from '@angular/material/table';
import { CoursesWarningComponent } from './components/views/school/courses-warning/courses-warning.component';
import { CourseClassRegistrationComponent } from './components/views/school/courses-course-classes/course-class-registration/course-class-registration.component';
import { CourseClassReadComponent } from './components/views/school/courses-course-classes/course-class-read/course-class-read.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    UserRegisterComponent,
    UserLogoffComponent,
    CoursesReadComponent,
    CoursesWarningComponent,
    CourseClassRegistrationComponent,
    CourseClassReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    DragDropModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
