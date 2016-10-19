import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
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
            graph: this.createGraph(props.stream.rootNode),
            selectedNode: null,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            graph: this.createGraph(nextProps.stream.rootNode),
            selectedNode: null,
        });
    }

    createGraph(node) {
        let graph = {
            nodes: [
                {
                    id: node.id,
                    label: node.operator.name ? node.operator.name : node.operator.eventSource,
                },
            ],
            edges: [...node.parents.map(parent => ({ from: parent.id, to: node.id, arrows: 'to' }))],
        };

        for (const parent of node.parents) {
            const parentGraph = this.createGraph(parent);
            graph = {
                nodes: [...graph.nodes, ...parentGraph.nodes],
                edges: [...graph.edges, ...parentGraph.edges],
            };
        }

        return graph;
    }

    handleNodeSelected(id) {
        const { stream } = this.props;

        this.setState({
            selectedNode: findNode(stream.rootNode, id),
        });
    }

    render() {
        const { stream } = this.props;
        return (
            <div className="col-md-8 col-md-offset-2">
                <h1>{ stream.name }</h1>
                <p>description: { stream.description }</p>
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
    let stream = { name: '' };
    if (state.streams.length > 0) {
        /* eslint-disable eqeqeq */
        stream = Object.assign({}, state.streams.find(s => s.id == ownProps.params.id));
    }
    return { stream };
}

export default connect(mapStateToProps)(StreamsShow);
