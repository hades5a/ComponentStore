import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromPizza from '../pizza/pizza.reducer';

export const reducers: ActionReducerMap<any> = {
    pizza: fromPizza.pizzaReducer
}