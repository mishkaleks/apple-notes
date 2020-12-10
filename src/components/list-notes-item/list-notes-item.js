// Base
import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { onEditNoteName, getNoteName, onAcceptNoteName, onActiveNote, onOpenModal } from '../../reducers/index';

// Material-UI
import { IconButton } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';

// Beautiful DND
import { Draggable } from "react-beautiful-dnd";

class ListNotesItem extends Component {

  static propTypes = {
    folders: PropTypes.array,
    activeFolderId: PropTypes.string,
    activeNoteId: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    startTime: PropTypes.string,
    index: PropTypes.number,
    onOpenModal: PropTypes.func,
    onEditNoteName: PropTypes.func,
    updateEditedNote: PropTypes.func,
    getNoteName: PropTypes.func,
    newNoteName: PropTypes.string,
    onAcceptNoteName: PropTypes.func,
    onActiveNote: PropTypes.func
  };

  handleOnDeleteNote = (e) => {
    const { folders, activeFolderId, id, onOpenModal } = this.props;
    const deleteNoteId = folders.find((item) => item.id === activeFolderId).notes.findIndex((item) => item.id === id);

    e.stopPropagation();
    onOpenModal(deleteNoteId, 'note');
  };
  
  handleOnEditNoteName = () => {
    const { folders, activeFolderId, onEditNoteName, id } = this.props;
    const idEditedNote = folders.find((item) => item.id === activeFolderId).notes.findIndex((item) => item.id === id);
    const editedNote = folders.find((item) => item.id === activeFolderId).notes[idEditedNote];
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
    const oldNoteId = folders.find((item) => item.id === activeFolderId).notes.findIndex((item) => item.id === id);
    const oldNote = folders.find((item) => item.id === activeFolderId).notes[oldNoteId];
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

  getItemStyle = (isDragging, draggableStyle) => ({
    // Some basic styles to make the items look a bit nicer
    userSelect: 'none',
  
    // Change background colour if dragging
    background: isDragging ? '#A5B9C9' : '',
  
    // Styles we need to apply on draggables
    ...draggableStyle
  });

  render() {
    const { classes, folders, activeFolderId, activeNoteId, id, title, startTime, index } = this.props;
    const activeNote = !activeNoteId ? false : folders.find(item => item.id === activeFolderId).notes.find((item) => item.edited === true);
    const isActiveNote = !activeNoteId
      ? false 
      : folders.find((item) => item.id === activeFolderId)
        .notes[folders.find((item) => item.id === activeFolderId).notes.findIndex((item) => item.id === activeNoteId)].edited;

    return (
      <Draggable draggableId={`${id}`} index={index}>
        {(provided, snapshot) => (
          <li 
            onClick={this.handleOnActiveNote}
            className={clsx(classes.inactiveNoteListItem, {
              [classes.activeNoteListItem]: activeNoteId === id,
              [classes.unclickableNoteListItem]: activeNote && activeNote.id !== id
            })}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={this.getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
          >
            <Box className={classes.wrNoteName}>
              <input
                onChange={this.handleGetNoteName}
                type="text"
                className={clsx(classes.inactiveNoteName, {
                  [classes.activeNoteName]: isActiveNote && activeNoteId === id,
                  [classes.activeNoteNameText]: activeNoteId === id
                })}
                defaultValue={title}
              />
              <Box
                component="span"
                className={clsx(classes.timeCreation, {
                  [classes.inactiveTimeCreation]: activeNoteId === id
                })}
              >
                { startTime }
              </Box>
            </Box>

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
              <CheckIcon className={clsx(classes.noteBtnsIncons, {
                [classes.inactiveNoteBtnsIncons]: activeNoteId === id
              })} />
              </IconButton>

              <IconButton
                onClick={this.handleOnEditNoteName}
                aria-label="edit"
                disabled={isActiveNote && activeNoteId === id}
                classes={{
                  root: classes.noteControlBtns,
                  disabled: classes.inactiveNoteControlBtns
                }} 
              >
              <EditIcon className={clsx(classes.noteBtnsIncons, {
                [classes.inactiveNoteBtnsIncons]: activeNoteId === id
              })} />
              </IconButton>

              <IconButton
                onClick={(e) => this.handleOnDeleteNote(e)}
                aria-label="delete"
                disabled={isActiveNote && activeNoteId === id}
                classes={{
                  root: classes.noteControlBtns,
                  disabled: classes.inactiveNoteControlBtns
                }}
              >
              <DeleteIcon className={clsx(classes.noteBtnsIncons, {
                [classes.inactiveNoteBtnsIncons]: activeNoteId === id
              })} />
              </IconButton>
            </div>
          </li>
        )}
      </Draggable>
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
  onEditNoteName,
  getNoteName,
  onAcceptNoteName,
  onActiveNote,
  onOpenModal
};

export default connect(mapStateToProps, mapDispatchToProps)(ListNotesItem);
