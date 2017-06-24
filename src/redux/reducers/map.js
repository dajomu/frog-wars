import * as types from '../actions/action-types';

const initialState = {
  selectedPad: -1,
};

export default (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case types.SELECT_PAD:
      return {...state, ...action};
    default:
      return state;
  }
};
