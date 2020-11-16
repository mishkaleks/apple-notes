// Base
import React from 'react';

// Redux
import { connect } from 'react-redux';

// Components
import ListNotesItem from '../list-notes-item/list-notes-item';

// Material-UI
import { Box } from '@material-ui/core';

// Styles
import useStyles from './list-notes-styles';

const NoteList = ({ folders, activeFolderId, activeNoteId }) => {
  const classes = useStyles();

  return (
    <Box className={classes.listNotes}>
      {
        activeFolderId === null
          ? 'List of the notes' 
          : folders[folders.findIndex((item) => item.id === activeFolderId)].notes.map(({ id, title }) => {
        const idKey = `${activeFolderId}_${id}`;

            return (
              <ListNotesItem 
                key={idKey}
                classes={classes}
                id={id}
                title={title}
              />
            );
          })
      }
    </Box>
  );
};

const mapStateToProps = ({ folders, activeFolderId, activeNoteId }) => {
  return {
    folders,
    activeFolderId,
    activeNoteId
  };
};

export default connect(mapStateToProps, null)(NoteList);
