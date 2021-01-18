import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CoursesService } from '../Services/courses.service';
import { ICourse } from './courses';

@Component({
  //selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = "Custom Pipe to replace charachter ...? by space";
  courses : ICourse[];
  imgUrl = "../assets/images/flower.jpeg";
  showDiv = false; 
  bananaInBox:string='x';
  inputPassed;
  hasClass = true;
  filteredCourses:ICourse[];
  _filterBy: string;

  set filterBy(val:string)
  {
    this._filterBy = val;
     this.filteredCourses = this.courses.filter((c:ICourse)=>c.Name.toLowerCase().indexOf(this._filterBy.toLowerCase()) !== -1);
  }

  @Input('myInputAlias') myInput : boolean;
  @Input() MessageFromParent : string;

  @Output() greetEventEmitter = new EventEmitter();

  callGreetOfParent()
  {
    this.greetEventEmitter.emit('From Courses Child');
  }

  clicked(input)
  {
    this.inputPassed = input.value;
  }

  constructor(private _coursesService : CoursesService) { }

  ngOnInit() {
    this.courses = this._coursesService.getCourses();
    this.filteredCourses = this.filteredCourses ? this.filteredCourses : this.courses;
  }

}
