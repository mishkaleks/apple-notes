// Base
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { onAddFolder, onCreateNewNote } from '../../reducers/index';

// Material-UI
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

// Styles
import useStyles from './top-bar-styles';

const TopBar = ({ open, setOpen, folders, onAddFolder, onCreateNewNote, activeFolderId }) => {
  const classes = useStyles();
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleOnAddFolder = () => {
    const newFolder = {
      id: `id${(+new Date()).toString(16)}`,
      title: `New Foolder`,
      notes: [],
      edited: false
    };

    onAddFolder(newFolder);
  };

  const handleOnCreateNewNote = () => {
    const startTime = new Date().toLocaleString();
    const newNote = {
      id: `id${activeFolderId}_${(+new Date()).toString(16)}`,
      title: `New Note`,
      content: 'Add description to note',
      edited: false,
      startTime: startTime
    };
    
    onCreateNewNote(newNote);
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
          <IconButton onClick={handleOnAddFolder} aria-label="create new folder">
            <CreateNewFolderIcon className={classes.сreateNewFolderIcon} />
          </IconButton>

          <IconButton 
            onClick={handleOnCreateNewNote} 
            aria-label="note add"
            disabled={!activeFolderId}
            classes={{
              root: classes.activeCreateNewNoteBtn,
              disabled: classes.inactiveCreateNewNoteBtn
            }} 
          >
            <NoteAddIcon /> 
          </IconButton>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = ({ folders, activeFolderId }) => {
  return {
    folders,
    activeFolderId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddFolder: (item) => dispatch(onAddFolder(item)),
    onCreateNewNote: (item) => dispatch(onCreateNewNote(item))
  };
};

TopBar.propTypes = {
  folders: PropTypes.array,
  onAddFolder: PropTypes.func,
  onCreateNewNote: PropTypes.func,
  activeFolderId: PropTypes.string
};

export default connect (mapStateToProps, mapDispatchToProps)(TopBar); 
