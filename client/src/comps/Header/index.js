
import React from 'react';

import {connect} from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import styled from 'styled-components';


import {open} from '../../actions/NavDrawer';

function mapStateToProps(state, ownProps) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    onMenuClick: ()=> dispatch(open()),
  };
}


// TODO: Consider extracting this
const Filler = styled.div`
  flex-grow: 1;
`;

const _Header = ({onMenuClick})=> (
  <header>
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu" onClick={onMenuClick} >
          <MenuIcon />
        </IconButton>

        <Filler />

        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </header>
);


const Header = connect(mapStateToProps, mapDispatchToProps)(_Header);

export default Header;
