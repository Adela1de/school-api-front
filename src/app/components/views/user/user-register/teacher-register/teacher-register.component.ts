import { Component, OnInit } from '@angular/core';
import { teacher } from '../../teacher.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  teacher: teacher =
  {
    userId:'',
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    role:''
  }

  ngOnInit(): void {
  }

  confirmRegistration():void
  {
    this.userService.addTeacher(this.teacher).subscribe(answer =>
      {
        console.log(answer)
        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(answer.userId))
        localStorage.setItem('role', JSON.stringify(answer.role))
      })
  }

}
