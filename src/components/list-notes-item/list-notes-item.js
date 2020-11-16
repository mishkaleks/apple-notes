// Base
import React, { Component } from 'react';
import clsx from 'clsx';

// Redux
import { connect } from 'react-redux';
import { onDeleteNote } from '../../reducers/index';

// Material-UI
import { IconButton } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class ListNotesItem extends Component {

  handleOnDeleteNote = () => {
    const { folders, activeFolderId, onDeleteNote, id } = this.props;
    const actFolderId = folders.findIndex((item) => item.id === activeFolderId);
    const deleteNoteId = folders[actFolderId].notes.findIndex((item) => item.id === id);

    onDeleteNote(deleteNoteId);
  };

  render() {
    const { classes, title } = this.props;

    return (
      <li 
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

        <IconButton onClick={this.handleOnDeleteNote} aria-label="delete" className={classes.noteControlBtns}>
        <DeleteIcon className={classes.noteBtnsIncons} />
        </IconButton>
      </div>
      </li>
    );
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(ListNotesItem);
