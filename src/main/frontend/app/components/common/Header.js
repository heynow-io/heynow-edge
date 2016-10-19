import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => (
    <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        { ' | ' }
        <Link to="/streams" activeClassName="active">Streams</Link>
    </nav>
);

export default Header;
