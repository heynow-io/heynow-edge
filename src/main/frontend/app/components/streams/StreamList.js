import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const StreamList = ({ streams }) => (
    <ul className="list-group">
        { streams.map(stream =>
            <li className="list-group-item" key={stream.id}>
                <Link to={`/streams/${stream.id}`}>{ stream.name }</Link>
            </li>
        ) }
    </ul>
);

StreamList.propTypes = {
    streams: PropTypes.array.isRequired,
};

export default StreamList;
