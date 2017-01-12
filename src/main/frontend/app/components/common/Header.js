import React from 'react';
import { IndexLink } from 'react-router';
import NavItem from './NavItem';

const Header = () => (
    <div className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button>
                <IndexLink to="/" className="navbar-brand">
                    Hey<span className="text-primary">Now</span>
                </IndexLink>
            </div>
            <div className="navbar-collapse collapse navbar-right">
                <ul className="nav navbar-nav">
                    <NavItem to="/" index>HOME</NavItem>
                    <NavItem to="/streams">STREAMS</NavItem>
                </ul>
            </div>
        </div>
    </div>
);

export default Header;
