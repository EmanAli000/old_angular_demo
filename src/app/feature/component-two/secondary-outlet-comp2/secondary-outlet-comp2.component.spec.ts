import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryOutletComp2Component } from './secondary-outlet-comp2.component';

describe('SecondaryOutletComp2Component', () => {
  let component: SecondaryOutletComp2Component;
  let fixture: ComponentFixture<SecondaryOutletComp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryOutletComp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryOutletComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
