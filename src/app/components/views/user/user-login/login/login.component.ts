import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../../user.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: user = 
  {
    userId:'',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role:''
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
    this.userService.loginStudent(this.user.email, this.user.password).subscribe(
      answer => {
        localStorage.setItem('user', JSON.stringify(answer.userId));
        localStorage.setItem('role', JSON.stringify(answer.role));
      }
    )

    window.location.reload();
    this.router.navigate(['']);
  }

}
