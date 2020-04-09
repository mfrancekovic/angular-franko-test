import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'hello',
  template: `<h1>HelloComponent</h1>
   <button (click)="go()">Ajmo dalje</button><router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent  {
  constructor(
    private router: Router,
  ) {
  }
  go() {
    this.router.navigateByUrl("/gigi");
  }
}
