
import React from 'react';

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


const NavDrawer = ()=> (
  <Drawer open={true} >
    <nav>
      <List>
        <ListItem button component={Link} to="/wishlist" >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText
            primary="Wishlist"
          />
        </ListItem>

        <ListItem button component={Link} to="/friends" >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItem>

      </List>
    </nav>
  </Drawer>
);

export default NavDrawer;
