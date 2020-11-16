// Base
import React from 'react';
import clsx from 'clsx';

// Redux
import { connect } from 'react-redux';

// Material-UI
import { Box } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

// Styles
import useStyles from './list-notes-styles';

const NoteList = ({ folders, activeFolderId }) => {
  const classes = useStyles();

  const items = activeFolderId === null ? 'List of the notes' :  folders[folders.findIndex((item) => item.id === activeFolderId)].notes.map((item) => {
    const { id, title } = item;

      return (
        <li key={id} className={classes.noteListItem}>
          <input
            type="text"
            id={`noteName${id}`}
            className={classes.noteName}
            defaultValue={title}
            disabled
          />

          <div className={classes.wrNoteControlBtns}>
            <IconButton id={`acceptNoteName${id}`} aria-label="check" className={clsx(classes.noteControlBtns, classes.acceptNoteNameBtn)}>
              <CheckIcon className={classes.checkIcon}  />
            </IconButton>

            <IconButton id={`editNoteName${id}`} aria-label="edit" className={classes.noteControlBtns}>
              <EditIcon className={classes.editIcon} />
            </IconButton>

            <IconButton id={`deleteNoteName${id}`} aria-label="delete" className={classes.noteControlBtns}>
              <DeleteIcon className={classes.deleteIcon} />
            </IconButton>
          </div>
        </li>
      );
  });

  return (
    <Box className={classes.listNotes}>
      { items }
    </Box>
  );
};

const mapStateToProps = ({ folders, activeFolderId }) => {
  return {
    folders,
    activeFolderId
  };
};

export default connect(mapStateToProps, null)(NoteList);
