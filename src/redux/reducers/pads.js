import * as types from '../actions/action-types';

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
    default:
      return state;
  }
};