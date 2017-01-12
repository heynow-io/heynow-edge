import React from 'react';
import { Link, IndexLink, withRouter } from 'react-router';

const InternalNavItem = ({ router, index, to, children, ...props }) => {
    const isActive = router.isActive('/', true) && index ? true : router.isActive(to);
    const LinkComponent = index ? IndexLink : Link;

    return (
        <li className={isActive ? 'active' : ''}>
            <LinkComponent to={to} {...props}>{children}</LinkComponent>
        </li>
    );
};

InternalNavItem.propTypes = {
    router: React.PropTypes.object,
    index: React.PropTypes.bool,
    to: React.PropTypes.string,
    children: React.PropTypes.string,
};

const NavItem = withRouter(InternalNavItem);

export default NavItem;
