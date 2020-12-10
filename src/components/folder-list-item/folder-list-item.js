// Base
import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { onEditFolderName, getFolderName, onAcceptFolderName, onActiveFolder, onOpenModal } from '../../reducers/index';

// Material-UI
import { IconButton } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

// Beautiful DND
import { Draggable } from "react-beautiful-dnd";

class FolderListItem extends Component {  

  static propTypes = {
    folders: PropTypes.array,
    activeFolderId: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    index: PropTypes.number,
    onEditFolderName: PropTypes.func,
    newFolderName: PropTypes.string,
    onAcceptFolderName: PropTypes.func,
    onActiveFolder: PropTypes.func
  };

  handleOnDeleteFolder = (e) => {
    const { folders, id, onOpenModal } = this.props;
    const deleteId = folders.findIndex((item) => item.id === id);

    e.stopPropagation();
    onOpenModal(deleteId, 'folder');
  };

  handleOnEditFolderName = () => {
    const { folders, onEditFolderName, id } = this.props;
    const idEditedFolder = folders.findIndex((item) => item.id === id);
    const editedFolder = folders[idEditedFolder];
    const updateEditedFolder = {
      ...editedFolder,
      edited: true
    };

    onEditFolderName(idEditedFolder, updateEditedFolder);
  };

  handleGetFolderName = (e) => {
    this.props.getFolderName(e);
  };

  handleOnAcceptFolderName = () => {
    const { folders, newFolderName, onAcceptFolderName, id } = this.props;
    const oldFolderId = folders.findIndex((item) => item.id === id);
    const oldFolder = folders[oldFolderId];
    const newFolderTitle = newFolderName ? newFolderName : oldFolder.title;
    const updateFolder = {
      ...oldFolder,
      title: newFolderTitle,
      edited: !oldFolder.edited
    };

    onAcceptFolderName(oldFolderId, updateFolder);
  };

  handleOnActiveFolder = () => {
    const { onActiveFolder, id } = this.props;
    
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
    const { classes, folders, activeFolderId, id, title, index } = this.props;
    const activeFolder = folders.find((item) => item.edited === true);
    const isActiveFolder = !activeFolderId ? false : folders.find((item) => item.id === activeFolderId).edited;

    return (
      <>
        <Draggable draggableId={`${id}`} index={index}>
          {(provided, snapshot) => (
            <li 
              onClick={this.handleOnActiveFolder}
              className={clsx(classes.inactiveFolderListItem, {
                  [classes.activeFolderListItem]: activeFolderId === id,
                  [classes.unclickableFolderListItem]: activeFolder && activeFolder.id !== id
              })}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={this.getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style
              )}
            >
              <input
                onChange={this.handleGetFolderName}
                type="text"
                className={isActiveFolder && activeFolderId === id ? classes.activeFolderName : classes.inactiveFolderName}
                defaultValue={title}
              />

              <div className={classes.wrFolderControlBtns}>
                <IconButton 
                  onClick={this.handleOnAcceptFolderName}  
                  aria-label="check" 
                  className={clsx(classes.folderControlBtns, 
                    isActiveFolder && activeFolderId === id 
                      ? classes.activeAcceptFolderNameBtn 
                      : classes.inActiveAcceptFolderNameBtn
                  )}
                >
                  <CheckIcon className={classes.folderBtnsIncons}  />
                </IconButton>

                <IconButton 
                  onClick={this.handleOnEditFolderName} 
                  aria-label="edit" 
                  className={clsx(classes.folderControlBtns, {
                    [classes.inactiveFolderControlBtns]: isActiveFolder && activeFolderId === id
                  })}
                >
                  <EditIcon className={classes.folderBtnsIncons} />
                </IconButton>

                <IconButton 
                  onClick={(e) => this.handleOnDeleteFolder(e)} 
                  aria-label="delete" 
                  className={clsx(classes.folderControlBtns, {
                    [classes.inactiveFolderControlBtns]: isActiveFolder && activeFolderId === id
                  })}
                >
                  <DeleteIcon className={classes.folderBtnsIncons} />
                </IconButton>
              </div>
            </li>
          )}
        </Draggable>
      </>
    );
  };
};

const mapStateToProps = ({ folders, newFolderName, activeFolderId, activeNoteId, newNoteName }) => {
  return {
    folders,
    newFolderName,
    activeFolderId,
    activeNoteId,
    newNoteName
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
