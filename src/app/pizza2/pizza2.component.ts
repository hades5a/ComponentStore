import { Component, OnInit } from '@angular/core';
import { PizzaStore } from '../componentStores/pizza.store';
import * as fromPizza from '../../app/pizza/pizza.reducer';

@Component({
  selector: 'app-pizza2',
  templateUrl: './pizza2.component.html',
  styleUrls: ['./pizza2.component.scss']
})
export class Pizza2Component implements OnInit {

  constructor(private readonly pizzaStore: PizzaStore) { }
  pizzasWithCStore$ = this.pizzaStore.pizzas$;

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
