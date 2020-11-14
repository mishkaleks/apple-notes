// Base
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

// Material-UI
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class FolderListItem extends Component {
  render() {
    const { classes, folders } = this.props;
    
    const items = folders.map(item => {
      const { id, title } = item;

      return (
        <li key={id} className={classes.folderListItem}>
          <input
            onBlur={this.onGetFolderName}
            type="text"
            id={`folderName${id}`}
            className={classes.folderName}
            defaultValue={title}
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
        { items }
      </React.Fragment>
    );
  };
};

const mapStateToProps = ({ folders }) => {
  return {
    folders
  };
};

export default connect (mapStateToProps)(FolderListItem);
