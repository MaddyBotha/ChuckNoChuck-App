import { combineReducers } from 'redux';
import fetchCatReducer from './fetchCatReducer';
import fetchJokeReducer from './fetchJokeReducer';

//root reducer is used in Store.js
// this function combines the reducers in the app

export default combineReducers({
    cat: fetchCatReducer,
    jokes: fetchJokeReducer
})