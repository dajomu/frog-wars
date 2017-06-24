import * as types from '../actions/action-types';

export default store => next => action => {
  const result = next(action);
  const state = store.getState();
  switch (action.type) {
    case types.TIMER_TICK:
      if(state.ships.length > 0) {
        const ships = state.ships.reduce((acc, ship) => {
          const target = state.pads[ship.target];
          const distance = calculateDistanceToTarget(ship, target);
          if (distance < 25) {
            if(ship.shipType === 'colonize') {
              store.dispatch({...ship, type: types.COLONIZE_PAD}); 
            }
          } else {
            acc.push({
              ...ship,
              ...getMove(ship, target),
            })
          }
          return acc;
        }, []);
        store.dispatch({type: types.UPDATE_SHIPS, ships});
      }
      break;
    default:
      break;
  }
  return result;
};

const getMove = (ship, target) => {
  const xDist = ship.x - target.x - 25;
  const xFactor = xDist === 0 ? 0 : xDist > 0 ? -1 : 1;
  const yDist = ship.y - target.y - 25;
  const yFactor = yDist === 0 ? 0 : yDist > 0 ? -1 : 1;
  const ratio = Math.abs((xDist + 0.1) / (yDist + 0.1));
  if (ratio > 1) {
    return {x: ship.x + (xFactor * 2), y: ship.y}
  } else if (ratio < 1) {
    return {x: ship.x, y: ship.y + (yFactor * 2)}
  } else {
    return {x: ship.x + (xFactor * 1), y: ship.y + (yFactor * 1)}
  }
}

const calculateDistanceToTarget = function(ship, target) {
  const diffX = ship.x - target.x - 25;
  const diffY = ship.y - target.y - 25;
  return Math.sqrt(diffX * diffX + diffY * diffY)
}