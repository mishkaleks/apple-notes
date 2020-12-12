// Base
import React from 'react';

// Material-UI
import { Box } from '@material-ui/core';

// Styles
import useStyles from './stub-folder-list-styles';
import addFolder from './add-folder.svg';

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
