import { Component, OnInit } from '@angular/core';
import { PizzaStore } from '../componentStores/pizza.store';
import * as fromPizza from '../../app/pizza/pizza.reducer';

@Component({
  selector: 'app-pizzawithcstore',
  templateUrl: './pizzawithcstore.component.html',
  styleUrls: ['./pizzawithcstore.component.scss']
})
export class PizzawithcstoreComponent implements OnInit {


  pizzasWithCStore$ = this.pizzaStore.pizzas$;

  constructor(private readonly pizzaStore: PizzaStore) { }

  ngOnInit(): void {

  }

  updatePizza(id: string, size: any) {
    this.pizzaStore.updatePizza({id: id, size: size});
  }

  deletePizza(id: string) {
    this.pizzaStore.deletePizza(id);
    console.log(id);
  }
  
  createPizzaWithCStore() {
    const pizza: fromPizza.Pizza = {
      id: new Date().getUTCMilliseconds().toString(),
      size: 'small'
    }
    this.pizzaStore.addPizza(pizza);
  }
}
