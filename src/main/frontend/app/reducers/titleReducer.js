import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function titleReducer(state = initialState.title, action) {
    switch (action.type) {
        case types.CHANGE_TITLE:
            return action.title;
        default:
            return state;
    }
}
