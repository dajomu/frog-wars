import * as types from './action-types';

export const selectPad = (selectedPad) => {
  return {
    type: types.SELECT_PAD,
    selectedPad,
  };
}
