import { v4 as uuid } from 'uuid';

export const listReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: state.items.concat([{id: uuid(), name: action.payload}])
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id)
      }
    default:
      return state;
  }
}