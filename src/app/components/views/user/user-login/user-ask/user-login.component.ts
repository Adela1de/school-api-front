import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  souAluno():void
  {
    this.router.navigate(['login/student']);
  }

  souProfessor():void
  {
    this.router.navigate(['login/teacher']);
  }

}
