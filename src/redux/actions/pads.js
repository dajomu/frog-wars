import * as types from './action-types';

export const addPad = (pad) => {
  return {
    type: types.ADD_PAD,
    pad,
  };
}
