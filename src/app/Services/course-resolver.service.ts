import { CoursesService } from './courses.service';
import { ICourseResolver } from './../courses/courses';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseResolverService implements Resolve<ICourseResolver> {

  constructor(private courseService: CoursesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ICourseResolver | Observable<ICourseResolver> | Promise<ICourseResolver> {
    
    let courseId = +route.paramMap.get('id');
    if( isNaN(courseId) )
    {
      console.error('CourseResolver: Id not a number')
      return of({ Course: null, Error: 'Id not a number' });
    }

    return this.courseService.getCourse(courseId)
    .pipe( 
      map(c=> ({ Course : c})),
      catchError(err=> 
        {
          return of({Course:null, Error: err })
        }));
  }
}
