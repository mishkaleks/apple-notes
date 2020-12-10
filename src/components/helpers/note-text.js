// Base
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { getNoteContent } from '../../reducers/index';

class NoteText extends Component {

  static propTypes = {
    folders: PropTypes.array,
    activeFolderId: PropTypes.string,
    activeNoteId: PropTypes.string,
    getNoteContent: PropTypes.func
  };

  handleGetNoteContent = (e) => {
    const { folders, activeFolderId, activeNoteId, getNoteContent } = this.props;
    const idNote = folders.find((item) => item.id === activeFolderId).notes.findIndex((item) => item.id === activeNoteId);
    const oldNote = folders.find((item) => item.id === activeFolderId).notes.find((item) => item.id === activeNoteId);
    const textNote = !e.target.value ? 'Add description to note' : e.target.value;
    const newNote = {
      ...oldNote,
      content: textNote
    };

    getNoteContent(idNote, newNote);
  };

  render() {
    const { classes, folders, activeFolderId, activeNoteId } = this.props;
    const noteContent = activeFolderId && activeNoteId 
      ? folders.find((item) => item.id === activeFolderId).notes.find((item) => item.id === activeNoteId).content
      : false;
      const idKey = `${activeFolderId}_${activeNoteId}`;
    
    return (
      <textarea
        onChange={this.handleGetNoteContent}
        key={idKey} 
        className={classes.noteContent}
        defaultValue={noteContent}
      ></textarea>
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

export default connect(mapStateToProps, mapDispatchToProps)(NoteText);
