import { CourseFormComponent } from './course-form.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveGuard implements CanDeactivate<CourseFormComponent> {
  canDeactivate(component: CourseFormComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(component.courseForm.dirty)
    {
      return confirm("If you left you will lose the canges, leave ?");
    }
    return true;
  }
}
