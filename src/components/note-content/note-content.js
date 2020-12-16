// Base
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Components
import NoteText from '../note-text/note-text';
import StubNoteText from '../helpers/stub-note-text';

class NoteContent extends Component {

  static propTypes = {
    activeNoteId: PropTypes.string,
  };

  render() {
    const { classes, activeNoteId } = this.props;
    
    return (
      <div className={classes.wrNoteContent}>
        {
          !activeNoteId 
            ? ( <StubNoteText /> )
            : ( <NoteText classes={classes} /> )
        }
      </div>
    );
  };
};

const mapStateToProps = ({ activeNoteId }) => {
  return {
    activeNoteId
  };
};

export default connect(mapStateToProps, null)(NoteContent);
