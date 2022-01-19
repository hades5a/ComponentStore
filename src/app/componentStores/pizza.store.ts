import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Observable } from "rxjs";
import { Pizza } from "../pizza/pizza.reducer";

export interface PizzaState {
    pizzas: Pizza[];
}

@Injectable()
export class PizzaStore extends ComponentStore<PizzaState> {
    constructor() {
        super({pizzas: [
            {
                id: '123',
                size: 'small'
            }
        ]});
      }

      pizzas$: Observable<Pizza[]> = this.select((state) => state.pizzas);

      readonly addPizza = this.updater((state, pizza: Pizza) => ({
        pizzas: [...state.pizzas, pizza],
      }));

      readonly updatePizza = this.updater((state, pizza: Pizza) => {
        let index = state.pizzas.findIndex(e => e.id == pizza.id);
        state.pizzas[index] = pizza;
        return {
          pizzas: state.pizzas
        }
      })

      readonly deletePizza = this.updater((state, id: string) => ({
        pizzas: state.pizzas.filter(e => e.id != id),
      }));

    //   readonly getMovie = this.effect((movieId$: Observable<string>) => {
    //     return movieId$.pipe(
    //       // 👇 Handle race condition with the proper choice of the flattening operator.
    //       switchMap((id) => this.moviesService.fetchMovie(id).pipe(
    //         //👇 Act on the result within inner pipe.
    //         tapResponse(
    //           (movie) => this.addMovie(movie),
    //           (error: HttpErrorResponse) => this.logError(error),
    //         ),
    //       )),
    //     );
    //   });
}