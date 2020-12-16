// Base
import React from 'react';
import PropTypes from 'prop-types';

// Components
import StubFolderList from '../helpers/stub-folder-list';
import FolderList from '../folder-list/folder-list';

// Styles
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  // FolderList styles
  wrFolderList: {
    minHeight: 'calc(100vh - 124px)',
    '@media screen and (max-width: 599px)': {
      minHeight: 'calc(100vh - 116px)',
    }
  },
  folderList: {
    width: '100%',
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  }
}));

const FolderContent = ({ folders, setOpen }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:667px)');

  return (
    <>
      {
        !folders.length
          ? ( <StubFolderList /> )
          : ( <FolderList classes={classes} folders={folders} isMobile={isMobile} setOpen={setOpen} /> )
      }
    </>
  );
};

FolderContent.propTypes = {
  folders: PropTypes.array,
};
 
export default FolderContent;
