import {Injectable} from '@angular/core';
import {IAppState, StateService} from "./state.service";
import {HttpClient} from "@angular/common/http";

import {Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private stateService: StateService,private http:HttpClient) {
  }

  login(data:any)
  {
     return this.http.post<IAppState>('http://localhost:3000/auth/signin', data)


       // .subscribe(res => {
       //   console.log(res);
       //   if(res){
       //     this.router.navigate(['/home'])
       //   }
       // })

    // this.stateService.setAppState({
    //   classId: 1,
    //   courseId: 1,
    //   classes: [{id: 1, name: "class1"}, {id: 2, name: "class2"}],
    //   userName:"Ahmed",
    //   userType:"teacher",
    // })
  }
}
