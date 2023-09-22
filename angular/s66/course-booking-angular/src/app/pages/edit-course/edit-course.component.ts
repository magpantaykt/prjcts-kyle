import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '@models/course';
import { CourseService } from '@services/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit{

  course: Course = new Course();
  
  constructor(
    // dependency injection
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ){
    let courseId: number = this.route.snapshot.params['id'];
    console.log(courseId);
    courseService.getOne(courseId).subscribe((response:Object) =>{
      this.course = response;
    })
  }

  ngOnInit(): void {}

  // Update step 4) OnSubmit function tasks is to use update method from courseService
  onSubmit():void{
    this.courseService.update(this.course).subscribe((response: Record<string, any>) =>{
        if(response['result'] === 'updated'){
          Swal.fire({
            title: 'Updated Successful',
            text: 'The course has been updated sucessfully',
            icon: 'success'
          }).then(() => {
            this.router.navigate(['/courses']);
          })
        }
    })

  }
}
