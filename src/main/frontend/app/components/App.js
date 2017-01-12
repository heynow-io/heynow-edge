import React, { PropTypes } from 'react';
import Header from './common/Header';
import Title from './common/Title';
import Footer from './common/Footer';

const App = ({ children }) => (
    <div>
        <Header />
        <Title />
        <div className="container mb">
            { children }
        </div>
        <Footer />
    </div>
);

App.propTypes = {
    children: PropTypes.object.isRequired,
};

export default App;
