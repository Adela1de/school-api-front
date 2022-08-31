import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  showFiller = false;
  buttonState = true;
  buttonIcon = "arrow_forward";

  constructor() { }

  ngOnInit(): void {

  }

  changeButtonIcon():void
  {
    if (this.buttonState == false) this.buttonIcon = "arrow_forward"; 
    else this.buttonIcon = "arrow_back";
    this.buttonState = !this.buttonState;
  }

}
