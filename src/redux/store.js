 import rootReducer from './reducers';
 import {applyMiddleware, createStore, compose} from 'redux';
 import thunkMiddleware from 'redux-thunk';
 import gameMiddleware from './middleware/game';
 
 export default (initialState) => {
   return createStore(rootReducer, initialState, compose(
      applyMiddleware(
        thunkMiddleware,
        gameMiddleware,
      ),
    ));
 };