import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../../user.model';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  user: user =
  {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role:''
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  confirmRegistration():void
  {
    this.userService.addStudent(this.user).subscribe(answer => {
      console.log(answer)
      localStorage.clear();
      localStorage.setItem('user', JSON.stringify(answer.userId))
      localStorage.setItem('role', JSON.stringify(answer.role))
    })
  }

}
