import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { covid19Reducer } from './reducer';

const rootReducer = combineReducers({ covidData: covid19Reducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
