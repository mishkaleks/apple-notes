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
    let maxIdFolders = 0;

    for(let i=0; i<folders.length; i++) {
      if(folders[i].id > maxIdFolders) {
        maxIdFolders = folders[i].id;
      }
    }

    const id = folders.length === 0 ? 0 : maxIdFolders + 1;
    const newFolder = {
      id,
      title: `New Foolder ${id + 1}`,
      notes: [],
      edited: false,
      countNotes: 0
    };

    onAddFolder(newFolder);
  };

  const handleOnCreateNewNote = () => {
    const idFolder = folders.findIndex((item) => item.id === activeFolderId);
    const idNote = `${activeFolderId}_${folders[idFolder].countNotes}`;
    const newNote = {
      id: idNote,
      title: `New Note`,
      content: 'Add description to note',
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
