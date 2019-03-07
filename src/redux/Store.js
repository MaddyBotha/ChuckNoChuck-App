import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


// set initial state of the store
const initialState = {};

// use thunk as middleware to dispatch to reducer
const middleware = [thunk];

// create an instanc eof the store
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware)
);

export default store;