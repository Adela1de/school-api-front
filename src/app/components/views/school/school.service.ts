import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllCourses():Observable<course[]>
  {
    const url = `${this.baseUrl}/school/courses`
    return this.http.get<course[]>(url);
  }

  getCourseById(id: String):Observable<course>
  {
    const url = `${this.baseUrl}/school/course/${id}`
    return this.http.get<course>(url);
  }
}
