// Base
import React from 'react';

// Material-UI
import { Box } from '@material-ui/core';

// Styles
import useStyles from './list-notes-styles';

const NoteList = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.listNotes}>
      List of the notes
    </Box>
  );
};

export default NoteList;
