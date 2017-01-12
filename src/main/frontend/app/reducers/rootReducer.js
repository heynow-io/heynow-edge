import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import streams from './streamReducer';
import title from './titleReducer';
import operators from './operatorsReducer';

const rootReducer = combineReducers({
    streams,
    title,
    operators,
    form,
});

export default rootReducer;
