import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  filterByInBox='';

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.filterByInBox = this._activatedRoute.snapshot.queryParamMap.get('filterBy');
  }

  navToCompTwo()
  {
    this._router.navigate(['/comp-two'],{ queryParams: { filterBy : this.filterByInBox } });
  }

}
