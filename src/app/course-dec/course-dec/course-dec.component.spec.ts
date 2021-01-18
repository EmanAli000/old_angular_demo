import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDecComponent } from './course-dec.component';

describe('CourseDecComponent', () => {
  let component: CourseDecComponent;
  let fixture: ComponentFixture<CourseDecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
