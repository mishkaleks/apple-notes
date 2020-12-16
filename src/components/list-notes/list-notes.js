// Base
import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Beautiful DND
import { Droppable } from "react-beautiful-dnd";

// Components
import ListNotesItem from '../list-notes-item/list-notes-item';

// Styles
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  listNotes: {
    width: '325px',
    height: 'calc(100vh - 64px)',
    padding: '15px',
    overflow: 'scroll',
    backgroundColor: '#cfe8fc',
    '@media screen and (max-width: 991px)': {
      width: '100%',
      height: 'calc(50vh)'
    }
  }
}));

const ListNotes = ({ folders, activeFolderId }) => {
  const classes = useStyles();
  const isDrag = useMediaQuery('(max-width:667px)');

  return (
    <Droppable droppableId="droppableNote">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className={classes.listNotes}>
            {!activeFolderId
              ? 'List of the notes' 
              : folders.find((item) => item.id === activeFolderId).notes.map((item, index) => {
                return (
                  <ListNotesItem 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    edited={item.edited}
                    startTime={item.startTime}
                    index={index}
                    isDrag={isDrag}
                  />
                );
              })}
            </div>
        </div>
      )}
    </Droppable>
  );
};

const mapStateToProps = ({ folders, activeFolderId }) => {
  return {
    folders,
    activeFolderId
  };
};

ListNotes.propTypes = {
  folders: PropTypes.array,
  activeFolderId: PropTypes.string
};

export default connect(mapStateToProps, null)(ListNotes);
