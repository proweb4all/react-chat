import React from 'react';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';

const styles = () => ({
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    width: `calc(100% - 320px)`,
    padding: '15px',
  },
  messageInput: {
    padding: '10px',
  },
});

class MessageInput extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.messageInputWrapper}>
        <Paper className={classes.messageInput} elevation={6}>
          <Input fullWidth placeholder="Type your message…"/>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(MessageInput);
