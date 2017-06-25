import * as types from './action-types';

export const selectPad = (selectedPad) => {
  return {
    type: types.SELECT_PAD,
    selectedPad,
  };
}

export const selectPadAction = (selectedPadAction) => {
  return {
    type: types.SELECT_PAD_ACTION,
    selectedPadAction,
  };
}