import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http:HttpClient) {
  }

  login(data:any)
  {
     return this.http.post('http://localhost:3000/auth/signin', data)
  }
}
