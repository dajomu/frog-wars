import pads from './pads.js';
import ships from './ships.js';
import map from './map.js'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  map,
  pads,
  ships,
});

export default rootReducer;