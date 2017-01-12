import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const StreamList = ({ streams }) => (
    <div>
        { streams.map(stream =>
            <p key={stream.id}>
                <Link to={`/streams/${stream.id}`}> { stream.name }</Link>
            </p>
        ) }
    </div>
);

StreamList.propTypes = {
    streams: PropTypes.array.isRequired,
};

export default StreamList;
