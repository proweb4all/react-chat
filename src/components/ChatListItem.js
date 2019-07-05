import React from 'react';
import { withStyles } from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from './Avatar';

const styles = () => ({
  itemText: {
    marginLeft: '15px',
  }
});

const ChatListItem = ({ classes, title }) => (
  <ListItem button>
    <Avatar colorFrom={title}>{title}</Avatar>
    <ListItemText className={classes.itemText} primary={title}/>
  </ListItem>
);

export default withStyles(styles)(ChatListItem);
