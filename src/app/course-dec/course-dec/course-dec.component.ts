import { ICourseResolver } from './../../courses/courses';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from 'src/app/courses/courses';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course-dec',
  templateUrl: './course-dec.component.html',
  styleUrls: ['./course-dec.component.css']
})
export class CourseDecComponent implements OnInit {

  courses: ICourse[];
  selectedCourse : ICourse;

  constructor(private _route: ActivatedRoute,/* private _coursesService : CoursesService,*/ private _router: Router) { }

  ngOnInit() {
    debugger;
    //let courseId = +this._route.snapshot.paramMap.get('id');
    //this.courses = this._coursesService.getCourses();
    //this.selectedCourse = this.courses.find((c:ICourse) => c.Id == courseId)
    
    this._route.data.subscribe(
      {
        next: data => { 
          this.selectedCourse = (data['resolvedCourse'] as ICourseResolver).Course; 
          console.error((data['resolvedCourse'] as ICourseResolver).Error); 
        }
      }
    )
    //this.selectedCourse = (this._route.snapshot.data['resolvedCourse'] as ICourseResolver).Course;
    //console.error((this._route.snapshot.data['resolvedCourse'] as ICourseResolver).Error);
  }

  backToCourses():void
  {
    this._router.navigate(['/courses']);
  }

}
