import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import {Provider} from 'react-redux';

import Header from './Header';
import NavDrawer from './NavDrawer';

import Friends from './Friends';
import Wishlist from './Wishlist';

import store from '../store';

const Index = () => <h2>Home</h2>;


const AppRouter = () => (
  <Provider store={store} >
    <Router>
      <div>
        <Header />

        <NavDrawer />

        <Route path="/" exact component={Index} />
        <Route path="/friends/" component={Friends} />
        <Route path="/wishlist/" component={Wishlist} />
      </div>
    </Router>
  </Provider>
);

export default AppRouter;
