// Base
import React, { Component } from 'react';
import clsx from 'clsx';

// Redux
import { connect } from 'react-redux';
import { onDeleteFolder, onEditFolderName, getFolderName, onAcceptFolderName, onActiveFolder } from '../../reducers/index';

// Material-UI
import { IconButton } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class FolderListItem extends Component {  
  render() {
    const { classes, folders, onDeleteFolder, onEditFolderName, getFolderName, onAcceptFolderName, onActiveFolder, activeFolderId } = this.props;
    const activeFolder = folders.find((item) => item.edited === true);
    const isActiveFolder = activeFolderId === null ? false : folders[folders.findIndex((item) => item.id === activeFolderId)].edited;
    
    const items = folders.map(item => {
      const { id, title } = item;

      return (
        <li 
          onClick={() => onActiveFolder(id)}
          key={id}
          className={clsx(classes.inactiveFolderListItem, {
              [classes.activeFolderListItem]: activeFolderId === id,
              [classes.unclickableFolderListItem]: activeFolder ? activeFolder.id !== id : false
          })}
        >
          <input
            onChange={getFolderName}
            type="text"
            className={isActiveFolder && activeFolderId === id ? classes.activeFolderName : classes.inactiveFolderName}
            defaultValue={title}
          />

          <div className={classes.wrFolderControlBtns}>
            <IconButton 
              onClick={() => onAcceptFolderName(id)}  
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
              onClick={() => onEditFolderName(id)} 
              aria-label="edit" 
              className={clsx(classes.folderControlBtns, 
                isActiveFolder && activeFolderId === id ? classes.inactiveFolderControlBtns : ''
              )}
            >
              <EditIcon className={classes.folderBtnsIncons} />
            </IconButton>

            <IconButton 
              onClick={(e) => onDeleteFolder(id, e)} 
              aria-label="delete" 
              className={clsx(classes.folderControlBtns, 
                isActiveFolder && activeFolderId === id ? classes.inactiveFolderControlBtns : ''
              )}
            >
              <DeleteIcon className={classes.folderBtnsIncons} />
            </IconButton>
          </div>
        </li>
      );
    });

    return (
      <>
        { items }
      </>
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
    onDeleteFolder: (id, e) => dispatch(onDeleteFolder(id, e)),
    onEditFolderName: (id) => dispatch(onEditFolderName(id)),
    getFolderName: (e) => dispatch(getFolderName(e)),
    onAcceptFolderName: (id) => dispatch(onAcceptFolderName(id)),
    onActiveFolder: (id) => dispatch(onActiveFolder(id))
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(FolderListItem);
