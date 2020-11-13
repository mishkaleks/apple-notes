// Base
import React from 'react';
import clsx from 'clsx';

// Material-UI
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

// Styles
import useStyles from './top-bar-styles';

const TopBar = ({ open, setOpen }) => {
  const classes = useStyles();
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
                     
        <Typography variant="h6" noWrap>
          <IconButton aria-label="create new folder">
            <CreateNewFolderIcon className={classes.сreateNewFolderIcon} />
          </IconButton>

          <IconButton aria-label="note add">
            <NoteAddIcon />
          </IconButton>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
