// Base
import React from 'react';
import clsx from 'clsx';

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
    const id = folders.length === 0 ? 0 : folders[folders.length - 1].id + 1;
    const newFolder = {
      id,
      title: `New Foolder ${id + 1}`,
      notes: [],
      edited: false
    };

    onAddFolder(newFolder);
  };

  const handleOnCreateNewNote = () => {
    const idFolder = folders.findIndex((item) => item.id === activeFolderId);
    const idNote = folders[idFolder].notes.length === 0 
      ? 0 
      : folders[idFolder].notes[folders[idFolder].notes.length - 1].id + 1;
    const newNote = {
      id: idNote,
      title: `New Note ${idNote + 1}`,
      content: '',
      edited: false
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
            className={activeFolderId === null ? classes.inactiveCreateNewNoteBtn : classes.activeCreateNewNoteBtn}
          >
            <NoteAddIcon className={activeFolderId === null ? classes.inactiveNoteAddIcon : classes.activeNoteAddIcon} />
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

export default connect (mapStateToProps, mapDispatchToProps)(TopBar); 
