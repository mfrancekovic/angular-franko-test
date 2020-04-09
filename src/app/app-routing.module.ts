import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { GigiComponent } from './gigi.component';

const routes: Routes = [
  {
    path: '',
    component: HelloComponent,
    children: [
      {
          path: 'gigi',
          component: GigiComponent,
        },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}