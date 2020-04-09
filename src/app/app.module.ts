import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { GigiComponent } from './gigi.component';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule, ActionReducerMap } from '@ngrx/store';
import * as fromStore from './store';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, StoreModule.forRoot({page: fromStore.reducer}) ],
  declarations: [ AppComponent, HelloComponent, GigiComponent ],
  bootstrap:    [ AppComponent ],
})



export class AppModule { }
