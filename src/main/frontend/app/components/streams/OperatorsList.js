import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class OperatorsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    logOperator(operator) {
        this.setState({ operator });
    }

    render() {
        const { operators } = this.props;
        return (
            <div>
                <h3 className="text-right ctitle">Operators</h3>
                <h4>Processor List</h4>
                <div className="hline" />
                { operators.processor.map(operator =>
                    <p key={operator.name}>
                        <button onClick={() => this.logOperator(operator)} className="btn btn-theme">
                            {operator.displayName}
                        </button>
                    </p>
                ) }
                <h4>Sink List</h4>
                <div className="hline" />
                { operators.sink.map(operator =>
                    <p key={operator.name}>
                        <button onClick={() => this.logOperator(operator)} className="btn btn-theme">
                            {operator.displayName}
                        </button>
                    </p>
                ) }
                {this.state.operator &&
                <div>
                    <h4 className="text-right ctitle">{ this.state.operator.displayName } Data</h4>
                    <p className="row">
                        <div className="col-sm-4 text-muted text-right">
                            Name
                        </div>
                        <div className="col-sm-8">
                            <b>{ this.state.operator.name }</b>
                        </div>
                    </p>
                    <p className="row">
                        <div className="col-sm-4 text-muted text-right">
                            Properties
                        </div>
                        <div className="col-sm-8">
                            { this.state.operator.properties.map(property =>
                                <div key={property.name}><b>{ property.name }</b> { property.description }</div>
                            ) }
                        </div>
                    </p>
                </div>
                }
            </div>
        );
    }
}

OperatorsList.propTypes = {
    operators: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    return {
        operators: state.operators,
    };
}

export default connect(mapStateToProps)(OperatorsList);
