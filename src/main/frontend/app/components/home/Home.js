import React from 'react';
import { connect } from 'react-redux';
import { setTitle } from '../common/Title';

class Home extends React.Component {
    componentWillMount() {
        const { dispatch } = this.props;
        setTitle(dispatch, 'Home');
    }

    render() {
        return (
            <div className="jumbotron animated fadeInRight">
                <h1>Stream Manager</h1>
            </div>
        );
    }
}


Home.propTypes = {
    dispatch: React.PropTypes.func,
};

export default connect()(Home);
