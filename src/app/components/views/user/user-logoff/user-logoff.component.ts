import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-logoff',
  templateUrl: './user-logoff.component.html',
  styleUrls: ['./user-logoff.component.css']
})
export class UserLogoffComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cancelLogOff():void
  {
    this.router.navigate(['']);
  }

  confirmLogOff():void
  {
    localStorage.removeItem('user');
    window.location.reload();
    this.router.navigate(['']);
  }

}
