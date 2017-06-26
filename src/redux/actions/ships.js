import * as types from './action-types';

export const addShip = (x, y, owner, type, target) => {
  return {
    type: types.ADD_SHIP,
    ship: {x, y, owner, type, target},
  };
}