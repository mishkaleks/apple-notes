// Base
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

// Material-UI
import { Box } from '@material-ui/core';

class NoteContent extends Component {
  render() {
    const { classes, folders, activeFolderId, activeNoteId } = this.props;
    const noteContent = activeFolderId !== null && activeNoteId !== null 
      ? folders[folders.findIndex((item) => item.id === activeFolderId)].notes.find((item) => item.id === activeNoteId).content
      : 'Select a note from the active directory list';
      const idKey = `${activeFolderId}_${activeNoteId}`;
    
    return (
      <Box className={classes.wrNoteContent}>
        <textarea
          key={idKey} 
          className={classes.noteContent}
          defaultValue={noteContent}
        ></textarea>
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

export default connect(mapStateToProps, null)(NoteContent);
