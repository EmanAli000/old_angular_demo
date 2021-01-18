import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryOutletComp1Component } from './secondary-outlet-comp1.component';

describe('SecondaryOutletComp1Component', () => {
  let component: SecondaryOutletComp1Component;
  let fixture: ComponentFixture<SecondaryOutletComp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryOutletComp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryOutletComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
