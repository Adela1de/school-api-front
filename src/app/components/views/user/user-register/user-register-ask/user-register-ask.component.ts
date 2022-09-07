import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register-ask',
  templateUrl: './user-register-ask.component.html',
  styleUrls: ['./user-register-ask.component.css']
})
export class UserRegisterAskComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  souAluno():void
  {
    this.router.navigate(['/register/student'])
  }

  souProfessor():void
  {
    this.router.navigate(['/register/teacher'])
  }

}
