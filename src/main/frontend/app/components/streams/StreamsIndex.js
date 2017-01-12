import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import StreamList from './StreamList';
import { setTitle } from '../common/Title';

class StreamsIndex extends React.Component {
    componentWillMount() {
        const { dispatch } = this.props;
        setTitle(dispatch, 'Streams');
    }

    render() {
        const { streams, children } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-md-3 animated fadeInLeft mt">
                        <div className="row">
                            <h4 className="col-md-8">List</h4>
                            <div className="col-md-4">
                                <Link to="/new-stream" className="btn btn-default pull-right">
                                    <span className="fa fa-plus" /> NEW STREAM
                                </Link>
                            </div>
                        </div>
                        <div className="hline" />
                        <StreamList streams={streams} />
                    </div>
                    <div className="col-md-9">
                        {!children &&
                        <p className="text-center text-muted mt">Select stream or add a new stream first</p>
                        }
                        { children }
                    </div>
                </div>
            </div>
        );
    }
}

StreamsIndex.propTypes = {
    streams: PropTypes.array.isRequired,
    children: PropTypes.object,
    dispatch: React.PropTypes.func,
};

function mapStateToProps(state) {
    return {
        streams: state.streams,
    };
}

export default connect(mapStateToProps)(StreamsIndex);
