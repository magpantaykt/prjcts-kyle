import { Component, OnInit } from '@angular/core';
import { Course } from '@models/course';
import { CourseService } from '@services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  courses:Course[] = [];
  // isAdmin: boolean = false;
  isAdmin: boolean = localStorage.getItem('isAdmin') == 'true';

  constructor(
    private courseService: CourseService
  ){
    this.getCourses();
  }

  ngOnInit(): void {
    // console.log(this.courses);
  }

  onAddCourseClick():void{}

  getCourses(){
    this.courseService.get().subscribe((response: Course[]) => { 
      console.log(response);
      this.courses  = response
    }
    )
  }
  
  deleteFromView(givenCourse:Course):void{
    this.courses = this.courses.filter(courseEntry => courseEntry !== givenCourse);
  }

}
