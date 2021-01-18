import { ICourse } from './../courses/courses';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators'
import { CoursesService } from '../Services/courses.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  //selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit, OnDestroy {

  constructor(private formBuilder : FormBuilder, private courseService : CoursesService,private _route : ActivatedRoute, private _router : Router) { }
  
  ngOnDestroy(): void {
    if(this.passedIdSubscription)
      this.passedIdSubscription.unsubscribe();
    if(this.getCourseSubscription)
      this.getCourseSubscription.unsubscribe();
    if(this.TypeOfContactValueChangesSubscription)
      this.TypeOfContactValueChangesSubscription.unsubscribe();
    if(this.CourseCodePartValueChangesSubscription)
    this.CourseCodePartValueChangesSubscription.unsubscribe();
  }

  courseForm : FormGroup ;
  course;
  typeOfContactMessage;
  title = 'Add Course';
  passedId = 0;
  passedIdSubscription: Subscription;
  getCourseSubscription: Subscription;
  TypeOfContactValueChangesSubscription: Subscription;
  CourseCodePartValueChangesSubscription: Subscription;

  ngOnInit() {
    // this.courseForm = new FormGroup({
    //   Name : new FormControl(),
    //   Desc : new FormControl()
    // });

    this.createForm({ Id : 0, Name : '', Desc : '' });

    //let passedId = +this._route.snapshot.paramMap.get('id');
     this.passedIdSubscription = this._route.paramMap.subscribe({
      next : id => { this.passedId = +id.get('id');
        if(this.passedId > 0)
        {
          debugger;
          this.title = 'Edit Course';
          this.callService(this.passedId);
        }
        else
        {
          this.title = 'Add Course';
          //this.createForm({ Id : 0, Name : '', Desc : '' });
        }
    },
      error : err => console.log(err)
    });
  }



  callService(id : number)
  {
    debugger;
    this.getCourseSubscription = this.courseService.getCourse(this.passedId).subscribe(
      {
        next : course => this.displayThisCourse(course),
        error : err => console.log(err) 
      }
    );
  }

  createForm(course : ICourse):void
  {
    debugger;

    this.courseForm = this.formBuilder.group({
      Name : course.Name,
      Cost : [null, [this.validateCost, this.parameterizedValidateCost(100)]],
      DisabledFielddd : { value : '', disabled : true },
      Desc : [course.Desc, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      TypeOfContact : 'Send SMS',
      PhoneNumber : ['',[Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      Email : ['', Validators.email],
      CourseCodePart : this.formBuilder.group({
        CourseCode : '',
        ConfirmCourseCode : ''
      },{ validator : this.validateCourseCode}),
      CourseSessions : this.formBuilder.array([this.formBuilder.group({
        Day : '',
        At : ''
      })])
    });
    this.TypeOfContactValueChangesSubscription = this.courseForm.get('TypeOfContact').valueChanges.pipe(debounceTime(1000)).subscribe(val=>console.log(val));
    this.CourseCodePartValueChangesSubscription = this.courseForm.get('CourseCodePart').valueChanges.subscribe(val => this.resetMessage(this.courseForm.get('CourseCodePart')));
  }

  addCourseSession():void
  {
    (this.courseForm.get('CourseSessions') as FormArray).push(this.formBuilder.group({
      Day : '',
      At : ''
    }))
  }

  removeCourseSession():void
  {
    let arrayLength = (this.courseForm.get('CourseSessions') as FormArray).length;
    if( arrayLength > 1)
    {
      (this.courseForm.get('CourseSessions') as FormArray).removeAt(arrayLength-1);
    }
  }

  private messagesObject_KeyIsValidationErrorReturnedByCustomValidation = {
    equal : "Values are different"
  }

  resetMessage(myControl : AbstractControl)
  {
    if((myControl.touched || myControl.pristine) && myControl.errors )
    {
      this.typeOfContactMessage = '';
      this.typeOfContactMessage = Object.keys(myControl.errors).map(key => this.messagesObject_KeyIsValidationErrorReturnedByCustomValidation[key] );
    }
  }

  displayThisCourse(course : ICourse)
  {
    this.courseForm.patchValue({
      Name : course.Name,
      Desc : course.Desc
    });
  }

  suggestCourse()
  {
    this.courseForm.setValue({
      Name : "OOP",
      Desc : "Solve spaghetti code problems"
    });

    // this.courseForm.patchValue({
    //   Name : "OOP"
    // });
  }

  contactBy(via : string)
  {
    debugger;
    if(via == "email")
    {
      this.courseForm.get('PhoneNumber').clearValidators();
      this.courseForm.get('Email').setValidators([Validators.required, Validators.email]);
    }
    else if(via == "phone")
    {
      this.courseForm.get('Email').clearValidators();
      this.courseForm.get('PhoneNumber').setValidators([Validators.required,  Validators.minLength(11), Validators.maxLength(11)]);
    }
    this.courseForm.updateValueAndValidity();
  }

  validateCost(myControl : AbstractControl): {[key:string]:boolean} | null
  {
    if(myControl.value < 0 || isNaN(myControl.value))
      return {'range':true};
    return null;
  }

  parameterizedValidateCost(maxValue : number) : ValidatorFn
  {
    return (myControl : AbstractControl) => {
    if(myControl.value < 0 || isNaN(myControl.value || myControl.value > maxValue))
      return {'range':true};
    return null;
    }
  }

  validateCourseCode(myControl: AbstractControl):{[key:string]:boolean} | null
  {
    if(myControl.get('CourseCode').pristine || myControl.get('ConfirmCourseCode').pristine)
      return null;

    if(myControl.get('CourseCode').value !== myControl.get('ConfirmCourseCode').value)
      return {'equal':true};
    return null;
  }

  saveCourse()
  {
    if(this.courseForm.invalid || this.courseForm.pristine)
      return;

      const course = {...this.course,...this.courseForm.value};

    if(this.passedId > 0 )
    {
      //update
    }
    else
    {
      //add
      this.courseForm.reset();
      this._router.navigate(['/courses']);
    }
  }
  
}


