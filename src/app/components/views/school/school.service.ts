import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from '../user/user.model';
import { course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  baseUrl: String = environment.baseUrl;

  studentId = localStorage.getItem('user')

  constructor(private http: HttpClient) { }

  getAllCourses():Observable<course[]>
  {
    const url = `${this.baseUrl}courses`
    return this.http.get<course[]>(url);
  }

  getCourseById(id: String):Observable<course>
  {
    const url = `${this.baseUrl}course/${id}`
    return this.http.get<course>(url);
  }

  setCourseToStudent(courseId: String):Observable<user>
  {
    const url = `${this.baseUrl}course/student/set/${this.studentId}/${courseId}`
    return this.http.post<user>(url, null);
  }
}
