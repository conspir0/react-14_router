import React from 'react';
import { Route, Switch } from 'react-router-dom';
import homeImage from './../../images/home.jpeg';
import productsImage from './../../images/products.jpeg';
import contactImage from './../../images/contact.jpeg';
import loginImage from './../../images/login.jpeg';
import errorImage from './../../images/error.png';
import './Header.css';


const list = [
  { path: '/', src: homeImage, alt: 'Home page image', exact: true },
  { path: '/products', src: productsImage, alt: 'Products page image', exact: false },
  { path: '/contact', src: contactImage, alt: 'Products page image', exact: false },
  { path: '/login', src: loginImage, alt: 'Login page image', exact: false },
  { src: errorImage, alt: 'Error image', exact: false, className: "header-img--error" },
];

const Header = () => {
  const routeList = list.map(route => (
    <Route
      path={route.path}
      exact={route.exact}
      render={() => (
        <img
          src={route.src}
          alt={route.alt}
          className={`header-img ${route.className}`} />
      )}>
    </Route>
  ))

  return (
    <>
      <Switch>
        {routeList}
      </Switch>
    </>
  );
}

export default Header;