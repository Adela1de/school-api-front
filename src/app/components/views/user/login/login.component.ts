import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: user = 
  {
    id:'',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  cancelLogin():void
  {
    this.router.navigate(['']);
  }

  userLogIn():void
  {
    this.userService.getUser(this.user.email, this.user.password).subscribe(
      answer => {
        this.user.firstName = answer.firstName;
        this.user.lastName = answer.lastName;
        this.user.email = answer.email;
      }
    )
    console.log(this.user)
  }

}
