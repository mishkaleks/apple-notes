// Base
import React from 'react';

// Redux
import { connect } from 'react-redux';

// Components
import FolderListItem from '../folder-list-item/folder-list-item';

// Styles
import useStyles from './folder-list-styles';

const FolderList = ({ folders }) => {
  const classes = useStyles();
  
  return (
    <div className={classes.wrFolderList}>
      <ul className={classes.folderList}>
        {folders.map(({ id, title }) => {
          return (
            <FolderListItem
              key={id} 
              classes={classes} 
              id={id} 
              title={title}
            />
          );
        })}
      </ul>
    </div>  
  );
};

const mapStateToProps = ({ folders }) => {
  return {
    folders
  };
};

export default connect(mapStateToProps, null)(FolderList);
