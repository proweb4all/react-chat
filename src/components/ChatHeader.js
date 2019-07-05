import React from 'react';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  appBar: {
    position: 'fixed',
    width: `calc(100% - 320px)`,
  },
});

const ChatHeader = ({ classes }) => (
  <AppBar color="primary" className={classes.appBar}>
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap>
        ProWeb4All React Chat
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(ChatHeader);
