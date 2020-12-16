// Base
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { onEditNoteName, onDisabledFolders, getNoteName, onAcceptNoteName, onActiveNote, onOpenModal } from '../../reducers/index';

// Components
import ListItem  from '../list-item/list-item';

class ListNotesItem extends Component {

  static propTypes = {
    folders: PropTypes.array,
    activeFolderId: PropTypes.string,
    activeNoteId: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    startTime: PropTypes.string,
    index: PropTypes.number,
    edited: PropTypes.bool,
    isDrag: PropTypes.bool,
    onOpenModal: PropTypes.func,
    onEditNoteName: PropTypes.func,
    onDisabledFolders: PropTypes.func,
    getNoteName: PropTypes.func,
    newNoteName: PropTypes.string,
    onAcceptNoteName: PropTypes.func,
    onActiveNote: PropTypes.func
  };

  // Delete note
  handleOnDeleteNote = (e) => {
    const { folders, activeFolderId, id, onOpenModal } = this.props;
    const deleteNoteId = folders.find((item) => item.id === activeFolderId).notes.findIndex((item) => item.id === id);

    e.stopPropagation();
    onOpenModal(deleteNoteId, 'note');
  };
  
  // Edit note name
  handleOnEditNoteName = () => {
    const { folders, activeFolderId, id, onEditNoteName, onDisabledFolders } = this.props;
    const idEditedNote = folders.find((item) => item.id === activeFolderId).notes.findIndex((item) => item.id === id);
    const editedNote = folders.find((item) => item.id === activeFolderId).notes[idEditedNote];
    const updateEditedNote = {
      ...editedNote,
      edited: true
    };

    onEditNoteName(id, idEditedNote, updateEditedNote);
    onDisabledFolders();
  };

  // Get note name
  handleGetNoteName = (e) => {
    this.props.getNoteName(e);
  };

  // Accept note name
  handleOnAcceptNoteName = () => {
    const { folders, activeFolderId, newNoteName, id, onAcceptNoteName, onDisabledFolders } = this.props;
    const oldNoteId = folders.find((item) => item.id === activeFolderId).notes.findIndex((item) => item.id === id);
    const oldNote = folders.find((item) => item.id === activeFolderId).notes[oldNoteId];
    const newNoteTitle = newNoteName ? newNoteName : oldNote.title;
    const updateNote = {
      ...oldNote,
      title: newNoteTitle,
      edited: !oldNote.edited
    };

    onAcceptNoteName(oldNoteId, updateNote);
    onDisabledFolders();
  };

  // Active note
  handleOnActiveNote = () => {
    const { id, onActiveNote } = this.props;
    
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
    const { folders, activeFolderId, activeNoteId, id, title, startTime, index, edited, isDrag } = this.props;
    const isSelected =  activeNoteId === id;
    const isEditable = !activeNoteId ? false : folders.find((item) => item.id === activeFolderId).notes.find((item) => item.id === activeNoteId).edited;
    
    return (
      <ListItem 
        getItemStyle={this.getItemStyle}
        id={id} 
        title={title}
        edited={edited}
        startTime={startTime}
        index={index}
        isDrag={isDrag}
        isSelected={isSelected}
        isEditable={isEditable}
        handleOnActiveItem={this.handleOnActiveNote}
        handleGetItemName={this.handleGetNoteName}
        handleOnAcceptItemName={this.handleOnAcceptNoteName}
        handleOnEditItemName={this.handleOnEditNoteName}
        handleOnDeleteItem={this.handleOnDeleteNote}
      />
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
  onDisabledFolders,
  getNoteName,
  onAcceptNoteName,
  onActiveNote,
  onOpenModal
};

export default connect(mapStateToProps, mapDispatchToProps)(ListNotesItem);
