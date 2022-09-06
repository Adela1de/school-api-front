import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from '../user/user.model';
import { course } from './course.model';
import { courseClass } from './courseClass.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  baseUrl: String = environment.baseUrlSchool;

  studentId = localStorage.getItem('user')

  constructor(private http: HttpClient) { }

  getUserById(userId: String):Observable<user>
  {
    const url = `${this.baseUrl}student/${userId}`
    return this.http.get<user>(url);
  }

  getAllCourses():Observable<course[]>
  {
    const url = `${this.baseUrl}courses`
    return this.http.get<course[]>(url);
  }

  getCourseById(courseId: String):Observable<course>
  {
    const url = `${this.baseUrl}course/${courseId}`
    return this.http.get<course>(url);
  }

  getAllClassesInACourseByItsName(courseName: String):Observable<courseClass[]>
  {
    const url = `${this.baseUrl}course?courseName=${courseName}`
    return this.http.get<courseClass[]>(url);
  }

  getCourseClassById(courseClassId: String):Observable<courseClass>
  {
    const url = `${this.baseUrl}courseClass/${courseClassId}`
    return this.http.get<courseClass>(url);
  }

  getAllCourseClassesOfAStudent():Observable<courseClass[]>
  {
    const url = `${this.baseUrl}courseClass/student?studentId=${this.studentId}`
    return this.http.get<courseClass[]>(url)
  }

  setCourseToStudent(courseId: String):Observable<user>
  {
    const url = `${this.baseUrl}course/student/set/${this.studentId}/${courseId}`
    return this.http.post<user>(url, null);
  }

  setStudentToCourseClass(courseClassId: String):Observable<courseClass>
  {
    const url = `${this.baseUrl}course/courseClass/student/set/${this.studentId}/${courseClassId}`
    return this.http.post<courseClass>(url, null)
  }
  
}
