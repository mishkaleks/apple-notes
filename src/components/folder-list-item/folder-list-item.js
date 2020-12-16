// Base
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { onEditFolderName, getFolderName, onAcceptFolderName, onActiveFolder, onOpenModal } from '../../reducers/index';

// Components
import ListItem  from '../list-item/list-item';

class FolderListItem extends Component {  

  static propTypes = {
    folders: PropTypes.array,
    activeFolderId: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    index: PropTypes.number,
    edited: PropTypes.bool,
    isMobile: PropTypes.bool,
    isDisabledFolders: PropTypes.bool,
    onEditFolderName: PropTypes.func,
    newFolderName: PropTypes.string,
    onAcceptFolderName: PropTypes.func,
    onActiveFolder: PropTypes.func
  };

  // Delete folder
  handleOnDeleteFolder = (e) => {
    const { folders, id, onOpenModal } = this.props;
    const deleteId = folders.findIndex((item) => item.id === id);

    e.stopPropagation();
    onOpenModal(deleteId, 'folder');
  };

  // Edit folder name
  handleOnEditFolderName = (e) => {
    const { folders, id, onActiveFolder, onEditFolderName } = this.props;
    const idEditedFolder = folders.findIndex((item) => item.id === id);
    const editedFolder = folders[idEditedFolder];
    const updateEditedFolder = {
      ...editedFolder,
      edited: true
    };

    e.stopPropagation();
    onActiveFolder(id);
    onEditFolderName(idEditedFolder, updateEditedFolder);
  };

  // Stop event propagation for clicking on folder name
  handleClickFolderName = (e) => {
    e.stopPropagation();
  };

  // Get folder name
  handleGetFolderName = (e) => {
    this.props.getFolderName(e);
  };

  // Accept folder name
  handleOnAcceptFolderName = (e) => {
    const { folders, newFolderName, id, onAcceptFolderName } = this.props;
    const oldFolderId = folders.findIndex((item) => item.id === id);
    const oldFolder = folders[oldFolderId];
    const newFolderTitle = newFolderName ? newFolderName : oldFolder.title;
    const updateFolder = {
      ...oldFolder,
      title: newFolderTitle,
      edited: !oldFolder.edited
    };

    e.stopPropagation();
    onAcceptFolderName(oldFolderId, updateFolder);
  };

  // Active folder name
  handleOnActiveFolder = () => {
    const { id, isMobile, setOpen, onActiveFolder } = this.props;
    
    isMobile && setOpen(false);
    onActiveFolder(id);
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
    const { folders, activeFolderId, id, title, index, edited, isDisabledFolders } = this.props;
    const typeStyles = 'folder';
    const isSelected =  activeFolderId === id;
    const isEditable = !activeFolderId ? false : folders.find((item) => item.id === activeFolderId).edited;

    return (
      <ListItem 
        getItemStyle={this.getItemStyle}
        id={id}  
        title={title}
        index={index} 
        edited={edited}
        typeStyles={typeStyles}
        isSelected={isSelected}
        isEditable={isEditable}
        isDisabledFolders={isDisabledFolders}
        handleOnActiveItem={this.handleOnActiveFolder}
        handleClickItemName={this.handleClickFolderName}
        handleGetItemName={this.handleGetFolderName}
        handleOnAcceptItemName={this.handleOnAcceptFolderName}
        handleOnEditItemName={this.handleOnEditFolderName}
        handleOnDeleteItem={this.handleOnDeleteFolder}
      />
    );
  };
};

const mapStateToProps = ({ folders, newFolderName, activeFolderId, activeNoteId, newNoteName, isDisabledFolders }) => {
  return {
    folders,
    newFolderName,
    activeFolderId,
    activeNoteId,
    newNoteName,
    isDisabledFolders
  };
};

const mapDispatchToProps = {
    onEditFolderName,
    getFolderName,
    onAcceptFolderName,
    onActiveFolder,
    onOpenModal
};

export default connect(mapStateToProps, mapDispatchToProps)(FolderListItem);
