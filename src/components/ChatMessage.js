import React from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from './Avatar';

const styles = () => ({
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `5px 15px`,
  },
  messageWrappperFromMe: {
    justifyContent: 'flex-end',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: '5px',
    marginLeft: '10px',
  },
  messageFromMe: {
    marginRight: '10px',
    backgroundColor: '#e6dcff'
  },
});

const ChatMessage = ({ classes, sender, content }) => {
  const isMessageFromMe = sender === 'me';

  const userAvatar = (
    <Avatar colorFrom={sender}>
      {sender}
    </Avatar>
  );

  return (
    <div className={classnames(
      classes.messageWrapper,
      isMessageFromMe && classes.messageWrappperFromMe
    )}>
      {!isMessageFromMe && userAvatar}
      <Paper className={classnames(
        classes.message,
        isMessageFromMe && classes.messageFromMe
      )}>
        <Typography variant="caption">
          {sender}
        </Typography>
        <Typography variant="body1">
          {content}
        </Typography>
      </Paper>
      {isMessageFromMe && userAvatar}
    </div>
  );
};

export default withStyles(styles)(ChatMessage);
