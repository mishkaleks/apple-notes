// Base
import React, { Component } from 'react';

// Material-UI
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class FolderListItem extends Component {
  render() {
    const { classes, folders = [{id: 1, title: 'Folder Name'}, {id: 2, title: 'Folder Name'}] } = this.props;
    
    const items = folders.map(item => {
      const { id, title } = item;

      return (
        <li key={id} className={classes.folderListItem}>
          <input
            onBlur={this.onGetFolderName}
            type="text"
            id={`folderName${id}`}
            className={classes.folderName}
            defaultValue={title + ' ' + id}
            disabled
          />

          <div className={classes.wrFolderBtns}>
            <IconButton aria-label="edit" className={classes.editFolderNameBtn}>
              <EditIcon className={classes.editIcon} />
            </IconButton>

            <IconButton aria-label="delete" className={classes.deleteFolderNameBtn}>
              <DeleteIcon className={classes.deleteIcon} />
            </IconButton>
          </div>
        </li>
      );
    });

    return (
      <React.Fragment>
        {items}
      </React.Fragment>
    );
  };
};

export default FolderListItem;
