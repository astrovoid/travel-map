import { createStore, applyMiddleware } from 'redux';
import pointsReducer from './elements/points';
import thunk from 'redux-thunk';

const store = createStore(pointsReducer, applyMiddleware(thunk));

export default store;