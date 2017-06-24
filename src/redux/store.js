 import rootReducer from './reducers';
 import {applyMiddleware, createStore, compose} from 'redux';
 import thunkMiddleware from 'redux-thunk';
 
 export default (initialState) => {
   return createStore(rootReducer, initialState, compose(
      applyMiddleware(
        thunkMiddleware,
      ),
    ));
 };