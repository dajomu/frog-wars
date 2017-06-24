import * as types from '../actions/action-types';

const initialState = {
  selectedPad: -1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_PAD:
      return {...state, ...action};
    default:
      return state;
  }
};
