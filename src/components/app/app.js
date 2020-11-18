// Base
import React from 'react';
import clsx from 'clsx';

// Redux
import { connect } from 'react-redux';
import { onReorderFolders, onReorderNotes } from '../../reducers/index';

// Material-UI
import { CssBaseline, Box } from '@material-ui/core';

// Beautiful DND
import { DragDropContext } from "react-beautiful-dnd";

// Components
import TopBar from '../top-bar/top-bar';
import StableDrawer from '../stable-drawer/stable-drawer';
import ListNotes from '../list-notes/list-notes';
import NoteContent from '../note-content/note-content';

// Styles
import useStyles from './app-styles';

function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const reorder = (list, startIndex, endIndex) => {   
    const result = Array.from(list);
    // Remove one element this startIndex
    const [removed] = result.splice(startIndex, 1);
    // Inserts the deleted element after endIndex
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    const { folders, activeFolderId, onReorderFolders, onReorderNotes } = props;
    let reorderList = null;

    // Dropped outside the list
    if (!result.destination) return;

    // Sorting folders
    if(result.source.droppableId === 'droppableFolder' && result.destination.droppableId === 'droppableFolder') {
      reorderList = reorder(folders, result.source.index, result.destination.index);
      onReorderFolders(reorderList);
    }
    
    // Sorting notes
    if(result.source.droppableId === 'droppableNote' && result.destination.droppableId === 'droppableNote') {
      reorderList = reorder(folders[folders.findIndex((item) => item.id === activeFolderId)].notes, result.source.index, result.destination.index);
      onReorderNotes(reorderList);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={classes.root}>
        <CssBaseline />
        <TopBar open={open} setOpen={setOpen} />
        <StableDrawer open={open} setOpen={setOpen} />
        <main className={clsx(classes.content, {
          [classes.contentShift]: open
        })}>
          <div className={classes.drawerHeader} />
          <Box className={classes.wrColumn}>
            <ListNotes />
            <NoteContent classes={classes} />    
          </Box>
        </main>    
      </div>
    </DragDropContext>
  );
};

const mapStateToProps = ({ folders, activeFolderId }) => {
  return {
    folders,
    activeFolderId
  };
};

const mapDispatchToProps = {
  onReorderFolders,
  onReorderNotes
};

export default connect(mapStateToProps, mapDispatchToProps)(PersistentDrawerLeft);
