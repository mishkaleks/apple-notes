// Base
import React from 'react';
import clsx from 'clsx';

// Redux
import { connect } from 'react-redux';
import { onReorderFolders, onReorderNotes, onMoveAndReorder } from '../../reducers/index';

// Material-UI
import { CssBaseline, Box } from '@material-ui/core';

// Beautiful DND
import { DragDropContext } from "react-beautiful-dnd";

// Components
import TopBar from '../top-bar/top-bar';
import StableDrawer from '../stable-drawer/stable-drawer';
import ListNotes from '../list-notes/list-notes';
import NoteContent from '../note-content/note-content';
import ModalWindow from '../helpers/modal-window';

// Styles
import useStyles from './app-styles';

function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const { isOpen } = props;

  const reorder = (list, startIndex, endIndex) => {   
    const result = Array.from(list);
    // Remove one element this startIndex
    const [removed] = result.splice(startIndex, 1);
    // Inserts the deleted element after endIndex
    result.splice(endIndex, 0, removed);

    return result;
  };

  const moveAndReorder = (listF, listN, startIndex, endIndex, activeFolderId) => {
    const result = Array.from(listF);
    const workListNActiveF = Array.from(listN);
    const [removedN] = workListNActiveF.splice(startIndex, 1);

    const workListNInactiveF = Array.from(listF[listF.findIndex((item) => item.id === Number(endIndex))].notes);
    workListNInactiveF.push(removedN);
    Array.prototype.splice.apply(result[result.findIndex((item) => item.id === Number(endIndex))].notes, [0, workListNInactiveF.length].concat(workListNInactiveF));
    result[result.findIndex((item) => item.id === activeFolderId)].notes.splice(startIndex, 1);
    result[result.findIndex((item) => item.id === activeFolderId)].notes.splice(Number(endIndex), 0);

    return result;
  };

  const onDragEnd = (result) => {
    const { folders, activeFolderId, onReorderFolders, onReorderNotes, onMoveAndReorder } = props;
    const { combine, source, destination } = result;
    let reorderList = null;

    // Move a note to another folder
    if (combine !== null && combine.droppableId === 'droppableFolder' && combine.draggableId && source.droppableId === 'droppableNote') {
      reorderList = moveAndReorder(
        folders,
        folders[folders.findIndex((item) => item.id === activeFolderId)].notes,
        source.index,
        combine.draggableId,
        activeFolderId
      );
      onMoveAndReorder(reorderList);
    }

    // Dropped outside the list
    if (!destination) return;

    // Sorting folders
    if (source.droppableId === 'droppableFolder' && destination.droppableId === 'droppableFolder') {
      reorderList = reorder(folders, source.index, destination.index);
      onReorderFolders(reorderList);
    }
    
    // Sorting notes
    if (source.droppableId === 'droppableNote' && destination.droppableId === 'droppableNote') {
      reorderList = reorder(folders[folders.findIndex((item) => item.id === activeFolderId)].notes, source.index, destination.index);
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
        <ModalWindow isOpen={isOpen} />    
      </div>
    </DragDropContext>
  );
};

const mapStateToProps = ({ folders, activeFolderId, isOpen }) => {
  return {
    folders,
    activeFolderId,
    isOpen
  };
};

const mapDispatchToProps = {
  onReorderFolders,
  onReorderNotes,
  onMoveAndReorder
};

export default connect(mapStateToProps, mapDispatchToProps)(PersistentDrawerLeft);
