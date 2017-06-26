import * as types from '../actions/action-types';
import playerConfig from '../../config/players';

const initialPads = [
  {x:50, y:100, owner: 'green', population: 50},
  {x:200, y:250, owner: 'none'},
  {x:300, y:50, owner: 'none'},
  {x:500, y:200, owner: 'none'},
  {x:600, y:250, owner: 'none'},
  {x:700, y:350, owner: 'red', population: 50},
  {x:720, y:30, owner: 'yellow', population: 50},
];

export default (state = initialPads, action) => {
  switch (action.type) {
    case types.ADD_PAD:
      return [...state, Object.assign({}, action.pad)];
    case types.TIMER_TICK:
      return state.map(pad => {
        if(pad.owner !== 'none') {
          const popSettings = playerConfig[pad.owner].population;
          if(pad.population && pad.population < popSettings.max && action.gameTime % popSettings.growthRate === 0) {
            pad.population += 1;
          }
        }
        return pad;
      })
    case types.COLONIZE_PAD:
      return state.map((pad, index) => {
        if(action.target === index) {
          return {...pad, owner: action.owner, population: 50};
        }
        return pad;
      })
    default:
      return state;
  }
};