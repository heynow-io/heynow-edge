import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Graph from '../graph/Graph';


const NewStreamForm = ({ handleSubmit, rootNode, onSubmit }) => (
    <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-12">
                <button type="submit" className="pull-right btn btn-success">Create</button>
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field name="name" component="input" type="text" className="form-control" />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description <span className="text-muted">(markdown supported)</span>
            </label>
            <Field name="description" component="textarea" type="text" className="form-control" />
        </div>
        <div className="form-group">
            <label htmlFor="rootNode">
                <span className="mr">Stream</span>
                <button
                    className="btn btn-default btn-sm"
                    type="submit"
                    onClick={
                            handleSubmit(values => onSubmit(
                            { ...values, preview: true }
                            ))}
                >
                    Preview
                </button>
            </label>
            <Field name="rootNode" component="textarea" type="json" className="form-control" rows="6" />
        </div>
        <div className="form-group">
            <Graph graph={rootNode} />
        </div>
    </form>
);


NewStreamForm.propTypes = {
    handleSubmit: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    rootNode: React.PropTypes.object,
};

export default reduxForm({ form: 'newStream' })(NewStreamForm);

