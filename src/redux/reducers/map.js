import * as types from '../actions/action-types';

const initialState = {
  selectedPad: -1,
  selectedPadAction: 'none',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_PAD:
      return {...state, ...action};
    case types.SELECT_PAD_ACTION:
      return {...state, ...action};
    default:
      return state;
  }
};
