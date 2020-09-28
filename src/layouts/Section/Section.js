import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeView from './../../pages/Home/Home';
import ProductsView from './../../pages/Products/Products';
import ContactView from './../../pages/Contact/Contact';
import LoginView from './../../pages/Login/Login';
import AdminView from './../../pages/Admin/Admin';
import ErrorView from './../../pages/Error/Error';


const list = [
  { path: '/', exact: true, component: HomeView },
  { path: '/products', exact: false, component: ProductsView },
  { path: '/contact', exact: false, component: ContactView },
  { path: '/login', exact: false, component: LoginView },
  { path: '/admin', exact: false, component: AdminView },
  { exact: false, component: ErrorView },
]

const Section = () => {
  const routeList = list.map(route => (
    <Route
      key={route.component}
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  ))

  return (
    <Switch>
      {routeList}
    </Switch>
  );
}

export default Section;