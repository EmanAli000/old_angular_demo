import { TestBed, async, inject } from '@angular/core/testing';

import { CourseDescGuard } from './course-desc.guard';

describe('CourseDescGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseDescGuard]
    });
  });

  it('should ...', inject([CourseDescGuard], (guard: CourseDescGuard) => {
    expect(guard).toBeTruthy();
  }));
});
