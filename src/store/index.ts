import { createStore } from 'redux';
import pointsReducer from './elements/points';

const store = createStore(pointsReducer);

export default store;