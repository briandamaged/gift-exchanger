import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './Header';

import Friends from './Friends';
import Wishlist from './Wishlist';

const Index = () => <h2>Home</h2>;


const AppRouter = () => (
  <Router>
    <div>
      <Header />

      <Route path="/" exact component={Index} />
      <Route path="/friends/" component={Friends} />
      <Route path="/wishlist/" component={Wishlist} />
    </div>
  </Router>
);

export default AppRouter;
