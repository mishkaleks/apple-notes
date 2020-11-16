// Base
import React from 'react';
import clsx from 'clsx';

// Redux
import { connect } from 'react-redux';
import { onDeleteNote } from '../../reducers/index';

// Material-UI
import { Box } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

// Styles
import useStyles from './list-notes-styles';

const NoteList = ({ folders, activeFolderId, onDeleteNote }) => {
  const classes = useStyles();

  const items = activeFolderId === null ? 'List of the notes' :  folders[folders.findIndex((item) => item.id === activeFolderId)].notes.map((item) => {
    const { id, title } = item;

      return (
        <li 
          key={id}
          className={classes.inactiveNoteListItem}
        >
          <input
            type="text"
            className={classes.noteName}
            defaultValue={title}
            disabled
          />

          <div className={classes.wrNoteControlBtns}>
            <IconButton aria-label="check" className={clsx(classes.noteControlBtns, classes.acceptNoteNameBtn)}>
              <CheckIcon className={classes.noteBtnsIncons} />
            </IconButton>

            <IconButton aria-label="edit" className={classes.noteControlBtns}>
              <EditIcon className={classes.noteBtnsIncons} />
            </IconButton>

            <IconButton onClick={() => onDeleteNote(id)} aria-label="delete" className={classes.noteControlBtns}>
              <DeleteIcon className={classes.noteBtnsIncons} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteNote: (id) => dispatch(onDeleteNote(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
