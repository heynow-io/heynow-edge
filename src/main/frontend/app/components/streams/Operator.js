import React, { PropTypes } from 'react';

const Operator = ({ operator }) => (
    <div>
        {operator.id && <h4>Id: {operator.id}</h4>}
        {operator.name && <h4>Name: {operator.name}</h4>}
        {operator.eventSource && <h4>Event source: {operator.eventSource}</h4>}
        {operator.eventType && <h4>Event type: {operator.eventType}</h4>}
        <h4>Properties:</h4>
        <ul className="list-group">
            {operator.properties && operator.properties.map(property => {
                return (
                    <li className="list-group-item" key={property.id}>
                        {property.name}: {property.value}
                    </li>
                )
            })}
        </ul>
    </div>
);


Operator.propTypes = {
    operator: PropTypes.object.isRequired,
};

export default Operator;
