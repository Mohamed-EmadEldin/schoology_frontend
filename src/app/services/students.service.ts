import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baserUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }


  register(student: any){
    return this.http.post(`${this.baserUrl}/auth/signup/student`, student)
  }
}
