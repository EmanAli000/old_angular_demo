import { FeatureModule } from './feature/feature.module';
import { CoursesData } from './CoursesData';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ConvertToSpacesPipe } from './courses/convert-to-spaces.pipe';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseDecComponent } from './course-dec/course-dec/course-dec.component';
import { CoursesService } from './Services/courses.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ConvertToSpacesPipe,
    WelcomeComponent,
    AboutComponent,
    CourseDecComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(CoursesData),
    FormsModule,
    HttpClientModule,
    FeatureModule, //if you configure the routing here instead of AppRoutingModule, forRoot will be configured last one so you can import this module before forRoot, because of the union of paths
    AppRoutingModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
