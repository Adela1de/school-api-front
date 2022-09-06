import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from '../../views/school/school.service';
import { teacher } from '../../views/user/teacher.model';
import { user } from '../../views/user/user.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  showFiller = false;
  buttonState = true;
  showLoggedContent = false;
  isUserRegisteredInACourse = false;
  isUserRegisteredInACourseClass = false;
  url = '';
  buttonIcon = "arrow_forward";

  user: user = 
  {
    userId:'',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    courseTitle: '',
    courseClasses: [],
    role:''
  }

  teacher: teacher = 
  {
    userId: '',
    firstName: '',
    lastName: '',
    email:'',
    password:'',
    role:''
  }

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') != null) 
    {
      this.showLoggedContent = true;
      if(this.isStudent())
      {
        this.schoolService.getStudentById(localStorage.getItem('user')!).subscribe(
          answer => {
            this.user = answer;
            if(this.user.courseTitle != null) this.isUserRegisteredInACourse = true;
            if(this.user.courseClasses?.length! > 0) this.isUserRegisteredInACourseClass = true;
            this.url = "/courses"
        })
      }
      else
      {
        this.schoolService.getTeacherById(localStorage.getItem('user')!).subscribe(
          answer =>{
            this.teacher = answer;
          }
        )
        this.url = "/coursesTeacher"
      }
    }
    
  }

  isStudent():boolean
  {
    let role = localStorage.getItem('role');
    return JSON.parse(role!) === "STUDENT"
  }

  changeButtonIcon():void
  {
    if (this.buttonState == false) this.buttonIcon = "arrow_forward"; 
    else this.buttonIcon = "arrow_back";
    this.buttonState = !this.buttonState;
  }

}
