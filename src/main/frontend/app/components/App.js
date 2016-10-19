import React, { PropTypes } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './common/Header';
import '../../styles/main.css';

const App = ({ children }) => (
    <div className="container-fluid">
        <Header />
        { children }
    </div>
);

App.propTypes = {
    children: PropTypes.object.isRequired,
};

export default App;
