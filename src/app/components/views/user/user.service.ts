import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { teacher } from './teacher.model';
import { user } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: String = environment.baseUrlUser;

  constructor(private http: HttpClient) { }

  loginStudent(email: String, password: String):Observable<user>
  {
    const url = `${this.baseUrl}login/student`
    return this.http.post<user>(url,{email, password})
  }

  loginTeacher(email: String, password: String):Observable<teacher>
  {
    const url = `${this.baseUrl}login/teacher`
    return this.http.post<teacher>(url,{email, password})
  }

  addStudent(student: user):Observable<user>
  {
    const url = `${this.baseUrl}register/student`
    return this.http.post<user>(url, student)
  }

  addTeacher(teacher: user):Observable<user>
  {
    const url = `${this.baseUrl}register/student`
    return this.http.post<user>(url, teacher)
  }
}
