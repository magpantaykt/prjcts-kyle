import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '@models/course';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl: string = environment.apiUrl + "/courses";
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Authorization': `Bearer ${this.sessionService.getToken()}`
  })

  constructor(
    // dependency injection
    private http: HttpClient,
    private sessionService: SessionService
  ) { }

  get(): Observable<Course[]>{
    // syntax for sending request for services that does NOT require token
    return this.http.get<Course[]>(this.baseUrl);
  }

  getOne(id: number): Observable<Object>{
    return this.http.get<Course[]>(`${this.baseUrl}/${id}`)
  }

  add(course: Course): void{}

  // Update step 5.) update() function here will send the request to the web service to update a specific row/record
  update(course: Course): Observable<Object>{
    return this.http.put(this.baseUrl + `/${course.id}`, course, {headers: this.httpHeaders});
  }

  archive(id:number): Observable<Object>{
    // syntax for sending request to services (in web service/api) that requires token
    return this.http.delete(this.baseUrl + `/${id}`, {headers: this.httpHeaders})
  }
}
