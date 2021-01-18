import { slideToLeftWhenNav } from './animation';
import { Component } from '@angular/core';
import { NavigationStart, Router, Event, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideToLeftWhenNav]
})
export class AppComponent {

  title = 'MyAngularProject';
  childrenInput = true;
  MessageToChild = "Hello Child";
  logedIn = false;
  name = '';
  loading: boolean;

  constructor(private _router: Router)
  {
    _router.events.subscribe((event : Event) => {
        if( event instanceof NavigationStart )
          this.loading = true;
        else if(event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError)
        this.loading = false;
      });
  }

  GreetFromChild(name:string)
  {
    alert('Hello '+name);
  }

  log(logInOut)
  {
    if(logInOut === 'login')
    {
      this.logedIn = true;
      this._router.navigateByUrl('/login');
    }
    else if(logInOut === 'logout')
    {
      this.logedIn = false;
      this._router.navigateByUrl('/welcome');
    }
  }

}
