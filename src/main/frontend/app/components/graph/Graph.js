import React, { PropTypes } from 'react';

const vis = require('vis');
const uuid = require('uuid');

class Graph extends React.Component {
    componentDidMount() {
        this.updateGraph();
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.graph === this.props.graph) {
            return false;
        }

        return true;
    }

    componentDidUpdate() {
        this.updateGraph();
    }

    createGraph(node) {
        if (!node.operator) {
            return {};
        }
        const edges = node.parents ? [...node.parents.map(parent => ({
            from: parent.id,
            to: node.id,
            arrows: 'to',
        }))] : [];
        let graph = {
            nodes: [
                {
                    id: node.id,
                    label: node.operator.name ? node.operator.name : node.operator.eventSource,
                },
            ],
            edges,
        };

        if (node.parents) {
            for (const parent of node.parents) {
                const parentGraph = this.createGraph(parent);
                graph = {
                    nodes: [...graph.nodes, ...parentGraph.nodes],
                    edges: [...graph.edges, ...parentGraph.edges],
                };
            }
        }

        return graph;
    }

    updateGraph() {
        const container = document.getElementById(this.props.identifier);
        const options = {
            edges: {
                color: '#000000',
                width: 0.5,
            },
            layout: {
                hierarchical: {
                    enabled: true,
                    direction: 'UD',
                    levelSeparation: 100,
                    nodeSpacing: 1,
                    sortMethod: 'directed',
                },
            },
        };

        const graph = this.createGraph(this.props.graph);
        const network = new vis.Network(container, graph, options);
        network.on('select', event => this.handleSelect(event));
    }

    handleSelect(event) {
        if (this.props.onNodeSelected) {
            this.props.onNodeSelected(event.nodes.length > 0 ? event.nodes[0] : null);
        }
    }

    render() {
        return React.createElement('div',
            { id: this.props.identifier, style: this.props.style, className: 'well' },
            this.props.identifier);
    }
}

Graph.propTypes = {
    identifier: PropTypes.string,
    graph: PropTypes.object,
    style: PropTypes.object,
    onNodeSelected: PropTypes.func,
};

Graph.defaultProps = {
    graph: {},
    style: { height: '480px' },
    identifier: uuid.v4(),
};

export default Graph;
