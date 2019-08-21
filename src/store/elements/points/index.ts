import { combineReducers, Reducer } from "redux";
import pointsReducer, { InitialStateType } from "./reducers";

export default combineReducers({
    pointsReducer
}) as Reducer<{pointsReducer: InitialStateType}>