import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PizzaStore } from 'src/app/componentStores/pizza.store';
import * as actions from '../pizza.actions';
import * as fromPizza from '../pizza.reducer';

@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.scss'],
  providers: [PizzaStore]
})
export class PizzaOrderComponent implements OnInit {

  pizzas$: any;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.pizzas$ = this.store.select(fromPizza.selectAllPizzas);
  }

  createPizza() {
    const pizza: fromPizza.Pizza = {
      id: new Date().getUTCMilliseconds().toString(),
      size: 'small'
    }
    this.store.dispatch(actions.Create({pizza: pizza}))
  }

  updatePizza(id: string, size: any) {
    this.store.dispatch(actions.UpdatePizza({update: {id: id, changes: {size: size}}}));
  }

  deletePizza(id: string) {
    this.store.dispatch(actions.Delete({id: id}));
  }


}
