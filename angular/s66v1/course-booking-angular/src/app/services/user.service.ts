import { Injectable } from '@angular/core';
import { User } from '@models/user';

import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class UserService {

    private baseUrl: string = environment.apiUrl + '/users';

    constructor(private http: HttpClient) { }


    // Observable (when used with RxJS) is to help manage asynchronous operations so that you don't have to deal with pending results directly in your code. It provides a way to work with asynchronous tasks more efficiently and in a more organized manner.
    login(email: string, password: string): Observable<Object> {
      return this.http.post(this.baseUrl + '/login', { email, password });
    }


    register(user: User): void { }

    enroll(courseId: number): void { }
}
