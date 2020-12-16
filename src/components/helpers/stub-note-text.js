// Base
import React from 'react';

// Material-UI
import { Box } from '@material-ui/core';

// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  stubNoteText: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    border: 'none',
    padding: '15px',
    resize: 'none'
  }
}));

const StubNoteText = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.stubNoteText}
      disabled
    >
      Please select a note...
    </Box>
  );
};

export default StubNoteText;
