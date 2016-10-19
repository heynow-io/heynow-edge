import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function streamReducer(state = initialState.streams, action) {
    switch (action.type) {
        case types.LOAD_STREAMS_SUCCESS:
            return action.streams;
        default:
            return state;
    }
}
