import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from './store';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  page$: Observable<string>;

  constructor(private store: Store) {
    this.page$ = store.select(fromStore.selectPageName);
  }
}
