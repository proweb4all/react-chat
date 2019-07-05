import React from 'react';
import { withStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
//import theme from './themes/default';

import { Add, Alarm, Explore } from '@material-ui/icons';

import { chats, messages } from './mock-data';

//console.log(theme);
const styles = () => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    //backgroundColor: theme.palette.primary.main,
    //backgroundColor: theme.backgroundColor,
    //backgroundColor: 'white',
  },
  appBar: {
    position: 'fixed',
    width: `calc(100% - 320px)`,
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: '320px',
  },
  drawerHeader: {
    //...theme.mixins.toolbar,
    // paddingLeft: theme.spacing.unit * 3,
    // paddingRight: theme.spacing.unit * 3,
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  chatItem: {
    paddingLeft: '15px',
  },
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll',
  },
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    //right: theme.spacing.unit * 3,
    //bottom: theme.spacing.unit * 3 + 48, // + bottom navigation
    right: '15px',
    bottom: '64px', // + bottom navigation
  },
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    height: '100%',
    overflow: 'hidden',
  },
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    //paddingTop: theme.spacing.unit * 3,
    paddingTop: '15px',
    paddingBottom: '120px',
  },
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    width: `calc(100% - 320px)`,
    //padding: theme.spacing.unit * 3,
    padding: '15px',
  },
  messageInput: {
    //padding: theme.spacing.unit * 2,
  },
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
    padding: '5px 15px',
  },
  messageWrappperFromMe: {
    justifyContent: 'flex-end',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    //padding: theme.spacing.unit,
    padding: '5px',
    //marginLeft: theme.spacing.unit * 2,
    marginLeft: '10px',
  },
  messageFromMe: {
    //marginRight: theme.spacing.unit * 2,
    marginRight: '10px',
    backgroundColor: '#e6dcff'
  },
});

class App extends React.Component {
  render() {
    const { classes } = this.props;
    //console.log(theme);

    return (
      <div className={classes.root}>
        {/* {printTheme} */}
        <AppBar color="primary" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              ProWeb4All React Chat
            </Typography>
          </Toolbar>
        </AppBar>
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
          <List className={classes.chatsList}>
            {chats.map((chat, index) => (
              <ListItem key={index} button>
                <Avatar>{chat.title && chat.title[0]}</Avatar>
                <ListItemText className={classes.chatItem} primary={chat.title}/>
              </ListItem>
            ))}
          </List>
          <Button
            variant="fab"
            color="primary"
            className={classes.newChatButton}
          >
            <Add />
          </Button>
          <BottomNavigation showLabels>
            <BottomNavigationAction label="My Chats" icon={<Alarm />} />
            <BottomNavigationAction label="Explore" icon={<Explore />} />
          </BottomNavigation>
        </Drawer>
        <main className={classes.chatLayout}>
          <div className={classes.messagesWrapper}>
            {messages && messages.map((message, index) => {
              const isMessageFromMe = message.sender === 'me';

              const userAvatar = (
                <Avatar>
                  {message.sender[0]}
                </Avatar>
              );

              return (
                // <div className={classNames(classes.messageWrapper, isMessageFromMe && classes.messageWrappperFromMe)}>
                <div key={index} className={[
                  classes.messageWrapper,
                  isMessageFromMe ? classes.messageWrappperFromMe : ''
                ].join(' ')}>
                  {!isMessageFromMe && userAvatar}
                  <Paper className={[
                    classes.message,
                    isMessageFromMe ? classes.messageFromMe : ''
                  ].join(' ')}>
                    <Typography variant="caption">
                      {message.sender}
                    </Typography>
                    <Typography variant="body1">
                      {message.content}
                    </Typography>
                  </Paper>
                  {isMessageFromMe && userAvatar}
                </div>
              );
            })}
          </div>
          <div className={classes.messageInputWrapper}>
            <Paper className={classes.messageInput} elevation={6}>
              <Input fullWidth placeholder="Type your message…"/>
            </Paper>
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
