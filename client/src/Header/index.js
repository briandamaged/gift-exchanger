
import React from 'react';

import { Link } from "react-router-dom";

const Header = ()=> (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/friends">Friends</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
