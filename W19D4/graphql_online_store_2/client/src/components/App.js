import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import logo from '../logo.svg';
import '../App.css';
import AuthRoute from "../util/route_util";
import Nav from "./Nav";
import Register from "./Register";
import Login from "./Login";
import ProductIndex from "./products/ProductIndex";
import ProductDetail from "./products/ProductDetail";

const App = () => (
  <div>
    <Nav />
    <h1>Online Store</h1>
    <Switch>
      <AuthRoute path="/register" component={Register} routeType="auth" />
      <AuthRoute path="/login" component={Login} routeType="auth" />
      <Route path="/products/:_id" component={ProductDetail} />
      <Route path="/products" component={ProductIndex} />
      <Redirect to="/products" />
    </Switch>
  </div>
);

export default App;
