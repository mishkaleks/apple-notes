// Base
import React from 'react';

// Material-UI
import { Box } from '@material-ui/core';

// Styles
import useStyles from './stub-note-text-styles';

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
