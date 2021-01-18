import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { LoginComponent } from './login/login.component';
import { Child1Component } from './component-two/child1/child1.component';
import { Child2Component } from './component-two/child2/child2.component';
import { SecondaryOutletComp1Component } from './component-two/secondary-outlet-comp1/secondary-outlet-comp1.component';
import { SecondaryOutletComp2Component } from './component-two/secondary-outlet-comp2/secondary-outlet-comp2.component';

const componentTwoChildrenRouting = [
  { path: 'secondaryOutletCompOne', component: SecondaryOutletComp1Component, outlet : 'secondaryOutlet'  },
  { path: 'secondaryOutletCompTwo', component: SecondaryOutletComp2Component, outlet : 'secondaryOutlet' },
  { path: 'child1', component: Child1Component },
  { path: 'child2', component: Child2Component },
  { path: '', redirectTo: 'child1', pathMatch:"full" }
];

const routingArray = [
  { path:'comp-one', component: ComponentOneComponent },
  { path:'comp-two', component: ComponentTwoComponent, children: componentTwoChildrenRouting },
  { path:'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    ComponentOneComponent, 
    ComponentTwoComponent, 
    LoginComponent, 
    Child1Component, 
    Child2Component, 
    SecondaryOutletComp1Component, 
    SecondaryOutletComp2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routingArray),
    FormsModule
  ],
  exports: [
    ComponentOneComponent,
    ComponentTwoComponent,
    LoginComponent
  ]
})
export class FeatureModule { }
