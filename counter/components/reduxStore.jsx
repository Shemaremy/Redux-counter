import { createStore } from 'redux';

// Define initial state
const initialState = {
  currentState: 1,
};

// Define actions
export const ACTIONS = {
  REMOVE: 'gabanya',
  ADD: 'ongera'
};

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        ...state,
        currentState: state.currentState + 1,
      };

    case ACTIONS.REMOVE:
      return{
        ...state,
        currentState: state.currentState -1,  
      };
    default:
      return state;
  }
};

// Create your Redux store with the reducer
const store = createStore(reducer);

export default store;
