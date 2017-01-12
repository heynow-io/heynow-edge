import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import OperatorsList from './OperatorsList';
import NewStreamForm from './NewStreamForm';
import { setTitle } from '../common/Title';
import { addStream } from '../../actions/streamActions';

class NewStream extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'asd', rootNode: {} };
    }

    componentWillMount() {
        const { dispatch } = this.props;
        setTitle(dispatch, 'New Stream');
    }

    handleSubmit = (values) => {
        if (values.preview) {
            this.setState({ rootNode: JSON.parse(values.rootNode) });
        } else {
            this.props.dispatch(addStream({
                rootNode: JSON.parse(values.rootNode),
                description: values.description,
                name: values.name,
            }, arg => browserHistory.push(`/streams/${arg.id}`)));
        }
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3 animated fadeInLeft">
                        <OperatorsList />
                    </div>
                    <div className="col-md-9 animated fadeInRight">
                        <NewStreamForm
                            onSubmit={this.handleSubmit}
                            rootNode={this.state.rootNode}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

NewStream.propTypes = {
    dispatch: React.PropTypes.func,
};

export default connect()(NewStream);
