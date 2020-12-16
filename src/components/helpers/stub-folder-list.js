// Base
import React from 'react';

// Material-UI
import { Box } from '@material-ui/core';

// Styles
import addFolder from './add-folder.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrImgAddFolder: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    userSelect: 'none',
    textAlign: 'center',
    '& img': {
      width: '50px'
    }
  },
  stubText: {
    marginTop: '15px',
    fontWeight: 'bold',
    color: '#3f51b5'
  }
}));

const StubFolderList = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrImgAddFolder}>
      <img src={addFolder} alt='add folder' />
      <Box className={classes.stubText}>Please add a directory</Box>
    </Box>
  );
};

export default StubFolderList;
