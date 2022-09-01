import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { course } from '../course.model';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-courses-warning',
  templateUrl: './courses-warning.component.html',
  styleUrls: ['./courses-warning.component.css']
})
export class CoursesWarningComponent implements OnInit {

  course: course =
  {
    id: '',
    title:'',
    teacherName: ''
  }

  constructor(private router: Router, private schoolService: SchoolService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.course.id = this.route.snapshot.paramMap.get('id')!;
    this.schoolService.getCourseById(this.course.id).subscribe(
      answer => {
        this.course = answer
      })
  }

  cancelRegistration():void
  {
    this.router.navigate(['']);
  }

  confirmRegistration():void
  {

  }

}