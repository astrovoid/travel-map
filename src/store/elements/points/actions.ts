import { createAction } from 'redux-act';

export const invalidatePoints = createAction('invalidate points');
export const fetchPointsRequest = createAction('fetch points request');
export const fetchPointsSuccess = createAction('fetch points success');
export const fetchPointsError = createAction('fetch points error');