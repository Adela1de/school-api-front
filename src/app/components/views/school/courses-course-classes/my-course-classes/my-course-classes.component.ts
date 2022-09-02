import { Component, OnInit } from '@angular/core';
import { courseClass } from '../../courseClass.model';
import { SchoolService } from '../../school.service';

@Component({
  selector: 'app-my-course-classes',
  templateUrl: './my-course-classes.component.html',
  styleUrls: ['./my-course-classes.component.css']
})
export class MyCourseClassesComponent implements OnInit {

  displayedColumns: String[] = ['title', 'credit']

  courseClasses: courseClass[] = []

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.schoolService.getAllCourseClassesOfAStudent().subscribe(answer => {
      this.courseClasses = answer;
    })
  }

}
