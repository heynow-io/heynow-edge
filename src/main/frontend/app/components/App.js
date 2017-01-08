import React, { PropTypes } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './common/Header';
import Title from './common/Title';
import Footer from './common/Footer';
import '../../styles/style.css';
import '../../styles/main.css';

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
