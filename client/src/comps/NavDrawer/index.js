
import React from 'react';

import { connect } from 'react-redux';

import { Link } from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import {close} from '../../actions/NavDrawer';

function mapStateToProps(state, ownProps) {
  return {
    open: state.navDrawer.open,
  }
}


function mapDispatchToProps(dispatch) {
  return {
    onClose: ()=> dispatch(close()),
  };
}


const _NavDrawer = ({open, onClose})=> (
  <Drawer open={open} onClose={onClose} >
    <nav>
      <List>
        <ListItem button component={Link} to="/wishlist" onClick={onClose} >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText
            primary="Wishlist"
          />
        </ListItem>

        <ListItem button component={Link} to="/friends" onClick={onClose} >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItem>

      </List>
    </nav>
  </Drawer>
);

const NavDrawer = connect(mapStateToProps, mapDispatchToProps)(_NavDrawer);

export default NavDrawer;