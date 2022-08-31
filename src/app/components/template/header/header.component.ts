import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loadComponent = true;

  constructor() { }

  ngOnInit(): void {
  }

  onMenuClick():void
  {
    this.loadComponent = !this.loadComponent;
  }

}
