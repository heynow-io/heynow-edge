import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import Graph from '../graph/Graph';
import Operator from './Operator';

function findNode(rootNode, id) {
    if (!rootNode) {
        return null;
    }

    let nodes = [rootNode];

    while (nodes.length > 0) {
        const current = nodes.shift();

        if (current.id === id) {
            return current;
        }

        nodes = [...nodes, ...current.parents];
    }

    return null;
}

class StreamsShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleNodeSelected = this.handleNodeSelected.bind(this);
        this.state = {
            graph: props.stream.rootNode,
            selectedNode: null,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            graph: nextProps.stream.rootNode,
            selectedNode: null,
        });
    }


    handleNodeSelected(id) {
        const { stream } = this.props;

        this.setState({
            selectedNode: findNode(stream.rootNode, id),
        });
    }

    render() {
        const { stream } = this.props;
        if (!stream.name) {
            return <p className="text-muted text-center">Loading...</p>;
        }
        return (
            <div className="animated fadeInRight">
                <h1>{ stream.name }</h1>
                <div><ReactMarkdown source={stream.description} /></div>
                <Graph graph={this.state.graph} onNodeSelected={this.handleNodeSelected} />
                {this.state.selectedNode && <Operator operator={this.state.selectedNode.operator} />}
            </div>
        );
    }
}


StreamsShow.propTypes = {
    stream: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
    let stream = {};
    if (state.streams.length > 0) {
        /* eslint-disable eqeqeq */
        stream = Object.assign({}, state.streams.find(s => s.id == ownProps.params.id));
    }
    return { stream };
}

export default connect(mapStateToProps)(StreamsShow);
