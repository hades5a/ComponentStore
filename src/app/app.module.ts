import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { PizzaOrderComponent } from './pizza/pizza-order/pizza-order.component';
import { reducers } from './reducers';
import { PizzawithcstoreComponent } from './pizzawithcstore/pizzawithcstore.component';
import { Pizza2Component } from './pizza2/pizza2.component';


// Other imports removed for brevity

@NgModule({
  // Other code removed for brevity
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states/ Restrict extension to log-only modeses recording actions and state changes when the extension window is not open
    }),
  ],
  // Other code removed for brevity
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    PizzaOrderComponent,
    PizzawithcstoreComponent,
    Pizza2Component
  ]
})
export class AppModule { }
