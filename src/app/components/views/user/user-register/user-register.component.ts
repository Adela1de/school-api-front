import { Component, OnInit } from '@angular/core';
import { user } from '../user.model';
import { UserService } from '../user.service';

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
    password: ''
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  confirmRegistration():void
  {
    this.userService.addUser(this.user).subscribe(answer => {
      console.log(answer)
      localStorage.clear();
      localStorage.setItem('user', JSON.stringify(answer.studentId))
    })
  }

}
