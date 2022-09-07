import { Component, OnInit } from '@angular/core';
import { course } from '../../course.model';

@Component({
  selector: 'app-courses-read-teacher',
  templateUrl: './courses-read-teacher.component.html',
  styleUrls: ['./courses-read-teacher.component.css']
})
export class CoursesReadTeacherComponent implements OnInit {

  constructor() { }

  displayedColumns: String[] = ['titulo', 'actions']

  courses: course[] = []

  ngOnInit(): void {
  }

}
