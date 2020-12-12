// Base
import React from 'react';
import PropTypes from 'prop-types';

// Components
import StubFolderList from '../helpers/stub-folder-list';
import FolderList from '../folder-list/folder-list';

// Styles
import useStyles from './folder-content-styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const FolderContent = ({ setOpen, folders }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:667px)');

  return (
    <>
      {
        folders.length === 0
          ? ( <StubFolderList /> )
          : ( <FolderList setOpen={setOpen} classes={classes} isMobile={isMobile} /> )
      }
    </>
  );
};

FolderContent.propTypes = {
  folders: PropTypes.array,
};
 
export default FolderContent;
