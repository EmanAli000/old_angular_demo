import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseDescGuard implements CanActivate {

  constructor(private _router: Router)
  { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      let passedId: number = +next.url[1].path;

      if( isNaN(passedId) || passedId < 1)
      {
        alert("Invalid Id");
        this._router.navigate(['/courses']);
        return false;
      }

    return true;
  }
  
}
