// Base
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { onReorderFolders, onReorderNotes, onMoveAndReorder, onAddFolder } from '../../reducers/index';

// Material-UI
import { CssBaseline } from '@material-ui/core';

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
  const { folders, isOpen, onAddFolder } = props;

  // Reorder items
  const reorder = (list, startIndex, endIndex) => { 
    // A new Array instance  
    const result = [...list];
    // Remove one element this startIndex
    const [removed] = result.splice(startIndex, 1);
    // Inserts the deleted element after endIndex
    result.splice(endIndex, 0, removed);

    return result;
  };

  // Sorting notes after dragging to another folder
  const moveAndReorder = (listF, listN, startIndex, endIndex, activeFolderId) => {
    // A new Array instance
    const result = [...listF];
    // A new Array instance
    const workListNActiveF = [...listN];
    const [removedN] = workListNActiveF.splice(startIndex, 1);
    // A new Array instance
    const workListNInactiveF = [...listF.find((item) => item.id === endIndex).notes];
    workListNInactiveF.push(removedN);
    // Change the contents of an array (destination folder)
    result.find((item) => item.id === endIndex).notes.splice(0, workListNInactiveF.length, ...workListNInactiveF);
    // Change the contents of an array (current folder)
    result.find((item) => item.id === activeFolderId).notes.splice(startIndex, 1);

    return result;
  };

  // A function leading to synchronous reordering of the list of dragged objects
  const onDragEnd = (result) => {
    const { folders, activeFolderId, onReorderFolders, onReorderNotes, onMoveAndReorder } = props;
    const { combine, source, destination } = result;
    let reorderList = null;

    // Move a note to another folder
    if (combine !== null && combine.droppableId === 'droppableFolder' && combine.draggableId && source.droppableId === 'droppableNote') {
      reorderList = moveAndReorder(
        folders,
        folders.find((item) => item.id === activeFolderId).notes,
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
      reorderList = reorder(folders.find((item) => item.id === activeFolderId).notes, source.index, destination.index);
      onReorderNotes(reorderList);
    }
  };

  // Create a new folder
  const handleOnAddFolder = () => {
    const newFolder = {
      id: `id${(+new Date()).toString(16)}`,
      title: `New Foolder`,
      notes: [],
      edited: false
    };

    onAddFolder(newFolder);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={classes.root}>
        <CssBaseline />
        <TopBar open={open} setOpen={setOpen} />
        <StableDrawer folders={folders} open={open} setOpen={setOpen} handleOnAddFolder={handleOnAddFolder} />
        <main className={clsx(classes.content, {
          [classes.contentShift]: open
        })}>
          <div className={classes.drawerHeader} />
          <div className={classes.wrColumn}>
            <ListNotes />
            <NoteContent classes={classes} />    
          </div>
        </main>
        <ModalWindow isOpen={isOpen} />    
      </div>
    </DragDropContext>
  );
};

const mapStateToProps = ({ isOpen, folders, activeFolderId }) => {
  return {
    isOpen,
    folders,
    activeFolderId
  };
};

const mapDispatchToProps = {
  onReorderFolders,
  onReorderNotes,
  onMoveAndReorder,
  onAddFolder,
};

PersistentDrawerLeft.propTypes = {
  folders: PropTypes.array,
  activeFolderId: PropTypes.string,
  onReorderFolders: PropTypes.func,
  onReorderNotes: PropTypes.func,
  onMoveAndReorder: PropTypes.func,
  onAddFolder: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(PersistentDrawerLeft);
