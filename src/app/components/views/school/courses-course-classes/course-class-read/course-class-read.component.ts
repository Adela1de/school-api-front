import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { courseClass } from '../../courseClass.model';
import { user } from '../../../user/user.model';
import { SchoolService } from '../../school.service';

@Component({
  selector: 'app-course-class-read',
  templateUrl: './course-class-read.component.html',
  styleUrls: ['./course-class-read.component.css']
})
export class CourseClassReadComponent implements OnInit {

  displayedColumns: String[] = ['title','credit', 'actions']

  courseClass: courseClass[] = []
  courseTitle: string = '';


  constructor(private schoolService: SchoolService, private router: Router) { }

  ngOnInit(): void {
    this.schoolService.getStudentById(localStorage.getItem('user')!).subscribe(answer => {
      this.courseTitle = JSON.stringify(answer.courseTitle)!;
      this.loadCourseClasses(answer.courseTitle!);
    })

  }

  loadCourseClasses(courseName: String):void
  {
    this.schoolService.getAllClassesInACourseByItsName(courseName).subscribe(answer => {
      this.courseClass = answer;
    })
  }

}
