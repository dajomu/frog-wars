import * as types from '../actions/action-types';

const initialShips = [
  {x:50, y:100, owner: 'green', target: 1, shipType: 'colonize'},
  {x:700, y:350, owner: 'red', target: 3, shipType: 'colonize'},
  {x:720, y:30, owner: 'yellow', target: 3, shipType: 'colonize'},
];

export default (state = initialShips, action) => {
  switch (action.type) {
    case types.UPDATE_SHIPS:
      return action.ships;
    // case types.ADD_SHIP:
    //   return [...state, Object.assign({}, action.ship)];
    default:
      return state;
  }
};
