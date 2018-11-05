
import React from "react";

import List from '@material-ui/core/List';

// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const friends = [
  {name: "Cindy Lauber"},
  {name: "Mark Lauber"},
  {name: "Matt Lauber"},
  {name: "Mike Lauber"},
  {name: "William Lauber"},
];


const Friends = ()=> (
  <List>
    {friends.map((f, i)=> (
      <ListItem key={i} button >
        <ListItemText primary={f.name} />
      </ListItem>
    ))}
  </List>
);

export default Friends;
