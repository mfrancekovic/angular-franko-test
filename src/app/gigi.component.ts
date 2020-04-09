import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './store';
@Component({
  selector: 'gigi',
  template: `<h1>Gigi!</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GigiComponent implements OnInit  {

  constructor(private store: Store) {

  }

  ngOnInit() {
    this.store.dispatch(fromStore.setPageName({name: 'Gigi'}))
  }

}
