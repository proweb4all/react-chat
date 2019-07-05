import React from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { Add } from '@material-ui/icons';

const styles = () => ({
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: '15px',
    bottom: '64px', // + bottom navigation
    backgroundColor: 'lightblue',
    borderRadius: '5px',
  },
});

const NewChatButton = ({ classes }) => (
  <Button
    variant="fab"
    color="primary"
    className={classes.newChatButton}
  >
    <Add />
  </Button>
);

export default withStyles(styles)(NewChatButton);
