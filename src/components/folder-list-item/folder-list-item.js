// Base
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { onDeleteFolder } from '../../reducers/index';

// Material-UI
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class FolderListItem extends Component {
  render() {
    const { classes, folders, onDeleteFolder } = this.props;
    
    const items = folders.map(item => {
      const { id, title } = item;

      return (
        <li key={id} className={classes.folderListItem}>
          <input
            type="text"
            id={`folderName${id}`}
            className={classes.folderName}
            defaultValue={title}
            disabled
          />

          <div className={classes.wrFolderBtns}>
            <IconButton id={`editFolderName${id}`} aria-label="edit" className={classes.editFolderNameBtn}>
              <EditIcon className={classes.editIcon} />
            </IconButton>

            <IconButton onClick={() => onDeleteFolder(id)} id={`deleteFolderName${id}`} aria-label="delete" className={classes.deleteFolderNameBtn}>
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

const mapStateToProps = ({ folders }) => {
  return {
    folders
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteFolder: (id) => dispatch(onDeleteFolder(id))
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(FolderListItem);
