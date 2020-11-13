// Base
import React from 'react';

// Components
import FolderListItem from '../folder-list-item/folder-list-item';

// Styles
import useStyles from './folder-list-styles';

const FolderList = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.wrFolderList}>
      <ul className={classes.folderList}>
        <FolderListItem classes={classes} />
      </ul>
    </div>  
  );
};

export default FolderList;
