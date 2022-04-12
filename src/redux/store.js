import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import covid19Reducer from './reducer';

const store = createStore(covid19Reducer, applyMiddleware(thunk));

export default store;
