import { Add_Todo, delete_All, remove_Todo } from "../actions";
const initialState = [
  { id: 1, todo: "Go Shopping", completed: "false" },
  { id: 2, todo: "Go to the Gym", completed: "false" },
  { id: 3, todo: "Watering Plants", completed: "true" },
];
export const operationsReducer= (state=initialState, action)=>{
    switch(action.type){
      case Add_Todo:
        return[...state, action.payload];
        case delete_All:
          return[];
          case remove_Todo:
            const filtredTodos = state.filter((todo)=>todo.id!==action.payload);
            return filtredTodos;
        default: return state;
    }

}