import { CourseResolverService } from './Services/course-resolver.service';
import { ICourse } from 'src/app/courses/courses';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CourseDecComponent } from './course-dec/course-dec/course-dec.component';
import { CourseDescGuard } from './course-dec/course-dec/course-desc.guard';
import { CourseFormComponent } from './course-form/course-form.component';
import { LeaveGuard } from './course-form/leave.guard';
import { CoursesComponent } from './courses/courses.component';
import { WelcomeComponent } from './welcome/welcome.component';

const courseChildrenRouting = [
  { path:'courses', component : CoursesComponent },
  { path:'course-desc/:id', resolve : { resolvedCourse: CourseResolverService }, component : CourseDecComponent, canActivate : [CourseDescGuard]  },
  { path: 'courseForm/:id', component : CourseFormComponent, canDeactivate : [LeaveGuard] },
];

const routes: Routes = [
  { path:'welcome', component : WelcomeComponent },
  { path:'about', component : AboutComponent },
  { path: 'course', children: courseChildrenRouting },
  { path:'', redirectTo:"welcome", pathMatch:"full" },
  { path:'**', redirectTo:"welcome", pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing : true } )], //enableTracing to log routing events (startNavigate,endNavigate,)
  exports: [RouterModule]
})
export class AppRoutingModule { }
