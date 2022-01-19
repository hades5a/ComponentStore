import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createReducer, createSelector, on, select } from '@ngrx/store';
import * as actions from './pizza.actions';

export interface Pizza {
    id: string;
    size: string;

}

export const pizzaAdapter = createEntityAdapter<Pizza>();
export interface State extends EntityState<Pizza> { }

const defaultPizza = {
    ids: ['123'],
    entities: {
        '123': {
            id: '123',
            size: 'small'
        }
    }
}

export const initialState: State = pizzaAdapter.getInitialState(defaultPizza);


export const pizzaReducer = createReducer(
    initialState,
    on(actions.Create, (state, {pizza}) => {
        return pizzaAdapter.addOne(pizza, state)
    }),
    on(actions.UpdatePizza, (state, {update}) => {
        return pizzaAdapter.updateOne(update, state)
    }),
    on(actions.Delete, (state, {id}) => {
        return pizzaAdapter.removeOne(id, state)
    })
);



export const getPizzaState = createFeatureSelector<State>('pizza');
export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = pizzaAdapter.getSelectors();

export const selectAllPizzas = createSelector(
    getPizzaState,
    selectAll
  );

  // loadMovies$ = createEffect(() => this.actions$.pipe(
//     ofType('[Movies Page] Load Movies'),
//     mergeMap(() => this.moviesService.getAll()
//       .pipe(
//         map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
//         catchError(() => EMPTY)
//       ))
//     )
//   );