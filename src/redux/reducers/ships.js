import * as types from '../actions/action-types';

const initialShips = [
  {x:50, y:100, owner: 'green', targetX: 100, targetY: 150},
  {x:700, y:350, owner: 'red', targetX: 100, targetY: 150},
  {x:720, y:30, owner: 'yellow', targetX: 100, targetY: 150},
];

export default (state = initialShips, action) => {
  switch (action.type) {
    // case types.ADD_SHIP:
    //   return [...state, Object.assign({}, action.ship)];
    case types.TIMER_TICK:
      return state.map(ship => {
        if (ship.x === ship.targetX && ship.y === ship.targetY) {
          // Blow up ship?
          return {...ship, exploded: true};
        } else {
          return {
            ...ship,
            x: getMove(ship.x, ship.targetX),
            y: getMove(ship.y, ship.targetY),
          };
        }
      })
    default:
      return state;
  }
};

const getMove = (here, target) => {
  if (here > target) {
    return here-1;
  } else if (target > here) {
    return here+1;
  } else {
    return here;
  }
}