import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'ota-portal-index',
  templateUrl: './portal-index.component.html',
  styleUrls: ['./portal-index.component.scss']
})
export class PortalIndexComponent implements OnInit {

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {

  }

}
