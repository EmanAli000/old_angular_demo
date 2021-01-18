import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() { }

  loadChild2()
  {
    this._router.navigate(['child2'],{ relativeTo: this._activatedRoute });
  }

  navigateToSecondaryOutletCompTwo()
  {
    this._router.navigate([{ outlets: { secondaryOutlet : ['secondaryOutletCompTwo'] } }]);
  }

}
