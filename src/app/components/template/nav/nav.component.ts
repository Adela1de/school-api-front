import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from '../../views/school/school.service';
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
  buttonIcon = "arrow_forward";
  user: user = 
  {
    studentId:'',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    course: ''
  }

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') != null) 
    {
      this.showLoggedContent = true;
      this.schoolService.getUserById(localStorage.getItem('user')!).subscribe(
        answer => {
          this.user = answer;
          if(this.user.course != null) this.isUserRegisteredInACourse = true;
      })
    }
  }

  changeButtonIcon():void
  {
    if (this.buttonState == false) this.buttonIcon = "arrow_forward"; 
    else this.buttonIcon = "arrow_back";
    this.buttonState = !this.buttonState;
  }

}
