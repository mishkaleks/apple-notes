// Base
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Material-UI
import { Box } from '@material-ui/core';

// Components
import NoteText from '../helpers/note-text';
import StubNoteText from '../helpers/stub-note-text';

class NoteContent extends Component {

  static propTypes = {
    activeNoteId: PropTypes.string,
  };

  render() {
    const { classes, activeNoteId } = this.props;
    
    return (
      <Box className={classes.wrNoteContent}>
        {
          !activeNoteId 
            ? ( <StubNoteText /> )
            : ( <NoteText classes={classes} /> )
        }
      </Box>
    );
  };
};

const mapStateToProps = ({ activeNoteId }) => {
  return {
    activeNoteId
  };
};

export default connect(mapStateToProps, null)(NoteContent);
