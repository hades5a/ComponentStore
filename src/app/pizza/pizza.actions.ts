import { Update } from "@ngrx/entity";
import { Action, createAction, props } from "@ngrx/store"
import { Pizza } from "./pizza.reducer";


export const Create = createAction(
    '[Pizzas] Create',
    props<{pizza: Pizza}>()
)

export const UpdatePizza = createAction(
    '[Pizzas] Update',
    props<{update: Update<Pizza>}>()
)

export const Delete = createAction(
    '[Pizzas] Delete',
    props<{id: string}>()
)

export type PizzaActions 
= 
typeof Create | typeof UpdatePizza | typeof Delete;