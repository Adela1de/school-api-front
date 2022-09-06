import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: String = environment.baseUrlUser;

  constructor(private http: HttpClient) { }

  getUser(email: String, password: String):Observable<user>
  {
    const url = `${this.baseUrl}login/student`
    return this.http.post<user>(url,{email, password})
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
