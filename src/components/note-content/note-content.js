// Base
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { getNoteContent } from '../../reducers/index';

// Material-UI
import { Box } from '@material-ui/core';

class NoteContent extends Component {

  handleGetNoteContent = (e) => {
    const { folders, activeFolderId, activeNoteId, getNoteContent } = this.props;
    const idNote = folders[folders.findIndex((item) => item.id === activeFolderId)].notes.findIndex((item) => item.id === activeNoteId);
    const oldNote = folders[folders.findIndex((item) => item.id === activeFolderId)].notes.find((item) => item.id === activeNoteId);
    const textNote = e.target.value === '' ? 'Add description to note' : e.target.value;
    const newNote = {
      ...oldNote,
      content: textNote
    };

    getNoteContent(idNote, newNote);
  };

  render() {
    const { classes, folders, activeFolderId, activeNoteId } = this.props;
    const noteContent = activeFolderId !== null && activeNoteId !== null 
      ? folders[folders.findIndex((item) => item.id === activeFolderId)].notes.find((item) => item.id === activeNoteId).content
      : 'Please select a note...';
      const idKey = `${activeFolderId}_${activeNoteId}`;
    
    return (
      <Box className={classes.wrNoteContent}>
        <textarea
          onChange={this.handleGetNoteContent}
          key={idKey} 
          className={classes.noteContent}
          defaultValue={noteContent}
        ></textarea>
        <textarea className={activeNoteId === null ? classes.activeStubContentNotes : classes.inactiveStubContentNotes} disabled ></textarea>
      </Box>
    );
  };
};

const mapStateToProps = ({ folders, activeFolderId, activeNoteId }) => {
  return {
    folders,
    activeFolderId,
    activeNoteId
  };
};

const mapDispatchToProps = {
  getNoteContent
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteContent);
