import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  baserUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getTeachers(){
     return this.http.get(`${this.baserUrl}/teachers`)
  }
}
