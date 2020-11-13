// Base
import React from 'react';

// Material-UI
import { Box } from '@material-ui/core';

// Styles
import useStyles from './note-content-styles';

const NoteContent = ({ open, setOpen }) => {
  const classes = useStyles();
  
  return (
    <Box className={classes.wrNoteContent}>
      <textarea 
        className={classes.noteContent} 
        placeholder="Add description to note"
      ></textarea>
    </Box>
  );
};

export default NoteContent;
