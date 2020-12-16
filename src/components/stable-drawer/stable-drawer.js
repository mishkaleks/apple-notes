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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    '@media screen and (max-width: 667px)': {
      flexShrink: '1'
    }
  },
  drawerPaper: {
    width: drawerWidth,
    '@media screen and (max-width: 667px)': {
      width: '100%'
    }
  },
  drawerHeader: {    
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    borderBottom: '1px solid #ddd',
    padding: theme.spacing(0, 1),
    // Necessary for content to be below app bar
    ...theme.mixins.toolbar,
    '@media screen and (max-width: 667px)': {
      backgroundColor: '#3f51b5',
      color: '#fff'
    }
  },
  wrLogo: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  сreateNewFolderIcon: {
    color: '#fff'
  },
  drawerCloseBtn: {
    color: 'rgba(0, 0, 0, 0.54)',
    '@media screen and (max-width: 667px)': {
      color: '#fff'
    }
  }
}));

const StableDrawer = ({ folders, open, setOpen, handleOnAddFolder }) => {
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
        )}

        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon className={classes.drawerCloseBtn} />
          ) : (
            <ChevronRightIcon className={classes.drawerCloseBtn} />
          )}
        </IconButton>  
      </div>
      <FolderContent folders={folders} setOpen={setOpen} />
    </Drawer>
  );
};

StableDrawer.propTypes = {
  folders: PropTypes.array,
  handleOnAddFolder: PropTypes.func
};

export default StableDrawer;
