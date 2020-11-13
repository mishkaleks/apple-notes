// Base
import React from 'react';

// Material-UI
import { Drawer, Box, IconButton } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Components
import FolderList from '../folder-list/folder-list';

// Styles
import useStyles from './stable-drawer-styles';

const StableDrawer = ({ open, setOpen }) => {
  const classes = useStyles();
  const theme = useTheme();

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

        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>  
      </div>
      <FolderList />
    </Drawer>
  );
};

export default StableDrawer;
