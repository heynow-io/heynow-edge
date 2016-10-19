import { combineReducers } from 'redux';
import streams from './streamReducer';

const rootReducer = combineReducers({
    streams,
});

export default rootReducer;
