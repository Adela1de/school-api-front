import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { teacher } from '../../teacher.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  teacher: teacher =
  {
    userId: '',
    firstName: '',
    lastName: '',
    email:'',
    password:'',
    role: ''
  }

  ngOnInit(): void {
  }

  cancelLogin():void
  {
    this.router.navigate(['']);
  }

  teacherLogIn():void
  {
    this.userService.loginTeacher(this.teacher.email, this.teacher.password).subscribe(answer => {
      localStorage.setItem('user', JSON.stringify(answer.userId));
      localStorage.setItem('role', JSON.stringify(answer.role));

    })

  }

}
