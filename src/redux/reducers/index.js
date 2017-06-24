import pads from './pads.js';
import map from './map.js'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  map,
  pads,
});

export default rootReducer;