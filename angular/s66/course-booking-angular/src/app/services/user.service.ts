import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string  = environment.apiUrl + "/users";

  constructor(
    private http: HttpClient
    ) { }
  

  // Observable is to help manage asynchronous operations, so that you don't have to deal with 'pending' results directly on your code. It provides way to work with asynchronous tasks more efficiently and in more organized manner.
  login(email: string, password:string): Observable<Object>{ 
    // console.log(email);
    // console.log(password);
    return this.http.post(this.baseUrl + "/login", {email, password})
  }

  register(user: User): Observable<Object> {
    return this.http.post(this.baseUrl + '/register', user);
  }


  enroll(courseId: number): void {}
  

}
