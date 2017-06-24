import * as types from '../actions/action-types';

const max_population = 300;

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
        if(pad.population && pad.population < max_population) {
          pad.population += 1;
        }
        return pad;
      })
    default:
      return state;
  }
};