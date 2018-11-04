
import React from 'react';

import { Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import styled from 'styled-components';


const Filler = styled.div`
  flex-grow: 1;
`;

const Header = ()=> (
  <header>
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" >
          News
        </Typography>
        <Filler />
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
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
