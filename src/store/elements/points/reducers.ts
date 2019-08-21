import { createReducer } from 'redux-act';
import { invalidatePoints, fetchPointsRequest, fetchPointsSuccess, fetchPointsError } from './actions';

const initialState = {
    points: [],
    isFetching: false,
    didInvalidate: false,
    lastUpdated: null,
}

export type InitialStateType = typeof initialState;

const pointsReducer = createReducer<InitialStateType>({
    [invalidatePoints]: (state) => {},
    [fetchPointsRequest]: (state) => {},
    [fetchPointsSuccess]: (state) => state,
    [fetchPointsError]: (state) => state
 }, initialState);

export default pointsReducer;