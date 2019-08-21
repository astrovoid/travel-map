import { createReducer } from 'redux-act';
import { invalidatePoints, fetchPointsRequest, fetchPointsSuccess, fetchPointsError } from './actions';

const initialState = {
    points: [],
    isFetching: false,
    didInvalidate: false,
    lastUpdated: null,
}

export type InitialStateType = typeof initialState;

const pointsReducer = createReducer<InitialStateType>({}, initialState);

pointsReducer.on(invalidatePoints, (state) => ({...state, didInvalidate: true}));
pointsReducer.on(fetchPointsRequest, (state) => ({...state, isFetching: true}));
pointsReducer.on(fetchPointsSuccess, (state, payload) => ({...state, isFetching: false, points: payload}))
pointsReducer.on(fetchPointsError, (state) => ({...state, isFetching: false}))

export default pointsReducer;