import * as types from './actionTypes';
import streamApi from '../api/streamApi';

export function loadStreamsSuccess(streams) {
    return { type: types.LOAD_STREAMS_SUCCESS, streams };
}

export function loadStreams() {
    return dispatch =>
        streamApi.getAllStreams().then((streams) => {
            dispatch(loadStreamsSuccess(streams));
        }).catch((error) => {
            throw error;
        });
}

export const addStream = stream => dispatch =>
    streamApi.addStream(stream).then((response) => {
        dispatch({
            type: types.ADD_STREAM_SUCCESS,
            response,
        });
    });
