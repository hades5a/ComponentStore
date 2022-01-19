import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PizzaStore } from './componentStores/pizza.store';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [PizzaStore]
})
export class AppComponent {

  constructor(
    private store: Store
  ) {}

  ngOnInit() {

  }
}