// Base
import React, { Component } from 'react';
import clsx from 'clsx';

// Redux
import { connect } from 'react-redux';
import { onDeleteNote, onEditNoteName, getNoteName, onAcceptNoteName, onActiveNote } from '../../reducers/index';

// Material-UI
import { IconButton } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class ListNotesItem extends Component {

  handleOnDeleteNote = (e) => {
    const { folders, activeFolderId, onDeleteNote, id } = this.props;
    const actFolderId = folders.findIndex((item) => item.id === activeFolderId);
    const deleteNoteId = folders[actFolderId].notes.findIndex((item) => item.id === id);

    e.stopPropagation();
    onDeleteNote(deleteNoteId);
  };
  
  handleOnEditNoteName = () => {
    const { folders, activeFolderId, onEditNoteName, id } = this.props;
    const idEditedFolder = folders.findIndex((item) => item.id === activeFolderId);
    const idEditedNote = folders[idEditedFolder].notes.findIndex((item) => item.id === id);
    const editedNote = folders[idEditedFolder].notes[idEditedNote];
    const updateEditedNote = {
      ...editedNote,
      edited: true
    };

    onEditNoteName(id, idEditedNote, updateEditedNote);
  };

  handleGetNoteName = (e) => {
    this.props.getNoteName(e);
  };

  handleOnAcceptNoteName = () => {
    const { folders, activeFolderId, newNoteName, onAcceptNoteName, id } = this.props;
    const folderId = folders.findIndex((item) => item.id === activeFolderId);
    const oldNoteId = folders[folderId].notes.findIndex((item) => item.id === id);
    const oldNote = folders[folderId].notes[oldNoteId];
    const newNoteTitle = newNoteName ? newNoteName : oldNote.title;
    const updateNote = {
      ...oldNote,
      title: newNoteTitle,
      edited: !oldNote.edited
    };

    onAcceptNoteName(oldNoteId, updateNote);
  };

  handleOnActiveNote = () => {
    const { onActiveNote, id } = this.props;

    onActiveNote(id);
  };

  render() {
    const { classes, folders, activeFolderId, activeNoteId, id, title } = this.props;
    const activeNote = activeNoteId === null ? false : folders[folders.findIndex((item) => item.id === activeFolderId)].notes.find((item) => item.edited === true);
    const isActiveNote = activeNoteId === null
      ? false 
      : folders[folders.findIndex((item) => item.id === activeFolderId)]
        .notes[folders[folders.findIndex((item) => item.id === activeFolderId)].notes.findIndex((item) => item.id === activeNoteId)].edited;

    return (
      <li 
        onClick={this.handleOnActiveNote}
        className={clsx(classes.inactiveNoteListItem, {
          [classes.activeNoteListItem]: activeNoteId === id,
          [classes.unclickableNoteListItem]: activeNote ? activeNote.id !== id : false
        })}
      >
      <input
        onChange={this.handleGetNoteName}
        type="text"
        className={clsx(
          isActiveNote && activeNoteId === id ? classes.activeNoteName : classes.inactiveNoteName,
          activeNoteId === id ? classes.activeNoteNameText : ''
        )}
        defaultValue={title}
      />

      <div className={classes.wrNoteControlBtns}>
        <IconButton 
          onClick={this.handleOnAcceptNoteName}
          aria-label="check"
          className={clsx(classes.noteControlBtns,
            isActiveNote && activeNoteId === id 
              ? classes.activeAcceptNoteNameBtn
              : classes.inactiveAcceptNoteNameBtn
          )}
        >
        <CheckIcon className={clsx(classes.noteBtnsIncons,
          activeNoteId === id ? classes.inactiveNoteBtnsIncons : ''
        )} />
        </IconButton>

        <IconButton
          onClick={this.handleOnEditNoteName}
          aria-label="edit"
          className={clsx(classes.noteControlBtns,
            isActiveNote && activeNoteId === id ? classes.inactiveNoteControlBtns : ''  
          )}  
        >
        <EditIcon className={clsx(classes.noteBtnsIncons,
          activeNoteId === id ? classes.inactiveNoteBtnsIncons : ''
        )} />
        </IconButton>

        <IconButton
          onClick={(e) => this.handleOnDeleteNote(e)}
          aria-label="delete"
          className={clsx(classes.noteControlBtns,
            isActiveNote && activeNoteId === id ? classes.inactiveNoteControlBtns : ''  
          )}
        >
        <DeleteIcon className={clsx(classes.noteBtnsIncons,
          activeNoteId === id ? classes.inactiveNoteBtnsIncons : ''
        )} />
        </IconButton>
      </div>
      </li>
    );
  };
};

const mapStateToProps = ({ folders, activeFolderId, activeNoteId, newNoteName }) => {
  return {
    folders,
    activeFolderId,
    activeNoteId,
    newNoteName
  };
};


const mapDispatchToProps = {
  onDeleteNote,
  onEditNoteName,
  getNoteName,
  onAcceptNoteName,
  onActiveNote
};

export default connect(mapStateToProps, mapDispatchToProps)(ListNotesItem);
