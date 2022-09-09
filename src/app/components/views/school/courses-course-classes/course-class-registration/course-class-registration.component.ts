import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { courseClass } from '../../courseClass.model';
import { SchoolService } from '../../school.service';

@Component({
  selector: 'app-course-class-registration',
  templateUrl: './course-class-registration.component.html',
  styleUrls: ['./course-class-registration.component.css']
})
export class CourseClassRegistrationComponent implements OnInit {

  constructor(private schoolService: SchoolService, private route: ActivatedRoute, private router: Router) { }

  courseClass: courseClass =
  {
    title: '',
  }

  ngOnInit(): void {
    this.getCourseClass();
  }

  getCourseClass():void
  {
    this.schoolService.getCourseClassById(this.route.snapshot.paramMap.get('id')!).subscribe(answer => {
      this.courseClass = answer;
    })
  }

  confirmRegistration():void
  {
      this.schoolService.setStudentToCourseClass(this.courseClass.courseClassId!).subscribe(answer => {
        console.log(answer)
      })
  }

  cancelRegistration():void
  {
    this.router.navigate(['']);
  }

}
