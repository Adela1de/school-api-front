import { Component, OnInit } from '@angular/core';
import { user } from '../../../user/user.model';
import { SchoolService } from '../../school.service';

@Component({
  selector: 'app-course-class-read',
  templateUrl: './course-class-read.component.html',
  styleUrls: ['./course-class-read.component.css']
})
export class CourseClassReadComponent implements OnInit {

  user: user=
  {
    password: '',
    email: '',
    courseTitle: ''
  }

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {

  }

}
