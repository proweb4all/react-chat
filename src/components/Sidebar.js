import React from 'react';
import { withStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ChatList from './ChatList';
import NewChatButton from './NewChatButton';
import { Restore, Explore } from '@material-ui/icons';

const styles = () => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: '320px',
  },
  drawerHeader: {
    //...theme.mixins.toolbar,
    paddingLeft: '15px',
    paddingRight: '15px',
  }
});

const Sidebar = ({ classes, chats }) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <div className={classes.drawerHeader}>
      <TextField
        fullWidth
        margin="normal"
        placeholder="Search chats..."
      />
    </div>
    <Divider />
    <ChatList chats={chats} />
    <NewChatButton />
    <BottomNavigation showLabels>
      <BottomNavigationAction label="My Chats" icon={<Restore />} />
      <BottomNavigationAction label="Explore" icon={<Explore />} />
    </BottomNavigation>
  </Drawer>
);

export default withStyles(styles)(Sidebar);
