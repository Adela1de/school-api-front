import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  buttonIcon = "arrow_forward";
  user: user = 
  {
    id:'',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('user') != null) this.showLoggedContent = true;
  }

  changeButtonIcon():void
  {
    if (this.buttonState == false) this.buttonIcon = "arrow_forward"; 
    else this.buttonIcon = "arrow_back";
    this.buttonState = !this.buttonState;
  }

}
