import React from 'react';
import { connect } from 'react-redux';
import * as types from '../../actions/actionTypes';

const Title = ({ title }) => (
    <div id="blue">
        <div className="container">
            <div className="row">
                <h3>{title}</h3>
            </div>
        </div>
    </div>
);


Title.propTypes = {
    title: React.PropTypes.string.isRequired,
};

function mapTitleToProps(state) {
    return {
        title: state.title,
    };
}

export function setTitle(dispatch, title) {
    dispatch({ type: types.CHANGE_TITLE, title });
}

export default connect(mapTitleToProps)(Title);

