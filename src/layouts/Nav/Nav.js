import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';


const list = [
  { name: 'Home', path: '/', exact: true },
  { name: 'Products', path: '/products', exact: false },
  { name: 'Contact', path: '/contact', exact: false },
  { name: 'Login', path: '/login', exact: false },
]

const Nav = () => {
  const navList = list.map(item => (
    <li
      key={item.name}
      className="nav-elem"
    >
      <NavLink
        to={item.path}
        exact={item.exact}
        activeClassName="nav-link--active"
        className="nav-link"
      >
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <ul className="nav">
      {navList}
    </ul>
  );
}

export default Nav;