import { Component, OnInit } from '@angular/core';
import { course } from '../../course.model';
import { SchoolService } from '../../school.service';

@Component({
  selector: 'app-courses-read',
  templateUrl: './courses-read.component.html',
  styleUrls: ['./courses-read.component.css']
})
export class CoursesReadComponent implements OnInit {

  
  displayedColumns: String[] = ['titulo', 'teacherName', 'actions']
  courses:course[] = []

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses():void
  {
    this.schoolService.getAllCourses().subscribe( 
      answer =>{
        this.courses = answer;
        console.log(answer)
      }
    )
  }

}
