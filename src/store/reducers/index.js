import { combineReducers } from 'redux';
import settings from "./settings.reducer";

const createReducer = (asyncReducers) =>
    combineReducers({
        settings,
        ...asyncReducers,
    });

export default createReducer;
