// Base
import React from 'react';
import PropTypes from 'prop-types';

// Material-UI
import { Drawer, Box, IconButton } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';

// Components
import FolderContent from '../folder-content/folder-content';

// Styles
import useStyles from './stable-drawer-styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const StableDrawer = ({ open, setOpen, folders, handleOnAddFolder }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:667px)');

  // Close the drawer
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <Box className={classes.wrLogo}>
          <span>Apple Notes</span>
        </Box>

        {isMobile && (
          <IconButton onClick={handleOnAddFolder} aria-label="create new folder">
            <CreateNewFolderIcon className={classes.сreateNewFolderIcon} />
          </IconButton>
        ) }

        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon className={classes.drawerCloseBtn} />
          ) : (
            <ChevronRightIcon className={classes.drawerCloseBtn} />
          )}
        </IconButton>  
      </div>
      <FolderContent setOpen={setOpen} folders={folders} />
    </Drawer>
  );
};

StableDrawer.propTypes = {
  folders: PropTypes.array,
  handleOnAddFolder: PropTypes.func
};

export default StableDrawer;
