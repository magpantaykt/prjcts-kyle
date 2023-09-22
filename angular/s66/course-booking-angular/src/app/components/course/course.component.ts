import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '@models/course';
import { CourseService } from '@services/course.service';
import { SessionService } from '@services/session.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{

  // Used to pass to the child component which has [course]
  // ! - non-null assertion operator
  @Input() course!: Course;
  @Input() deleteFromView!: Function;

  isAdmin: boolean = false;
  hasToken: boolean = (localStorage.getItem('token') !== null)

  constructor(
    // dependency injection
    private sessionService: SessionService,
    private router: Router,
    private courseService: CourseService
  ){
    this.isAdmin = sessionService.getIsAdmin();
  }

  ngOnInit():void {
    console.log(this.course);
  }

  edit():void {
    // Update step 2.) The task of edit() function is to redirect the user to edit-course page
    this.router.navigate(['/edit-course/' + this.course.id]);
  }
  
  archive(course:Course):void {
    Swal.fire({
      title: 'Confirm Action',
      text: 'Do you really want to archive this course?',
      icon: 'warning',
      showCancelButton: true
    }).then((result) => {
      if(result.isConfirmed){
        this.courseService.archive(this.course.id!).subscribe((response:Record<string,any>)=>{
          Swal.fire('Archived Successful', 'The course has been successfully archived', 'success');
          this.deleteFromView(course);
        });

      }
    })


  }

  enroll():void{}

}
