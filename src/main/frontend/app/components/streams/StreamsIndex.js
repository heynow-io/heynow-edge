import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import StreamList from './StreamList';

const StreamsIndex = ({ streams, children }) => (
    <div className="col-md-12">
        <h1>Streams</h1>
        <div className="col-md-4">
            <StreamList streams={streams} />
        </div>
        <div className="col-md-8">
            { children }
        </div>
    </div>
);

StreamsIndex.propTypes = {
    streams: PropTypes.array.isRequired,
    children: PropTypes.object,
};

function mapStateToProps(state) {
    return {
        streams: state.streams,
    };
}

export default connect(mapStateToProps)(StreamsIndex);
