// Base
import React from 'react';

// Redux
import { connect } from 'react-redux';

// Material-UI
import { Box } from '@material-ui/core';

// Beautiful DND
import { Droppable } from "react-beautiful-dnd";

// Components
import ListNotesItem from '../list-notes-item/list-notes-item';

// Styles
import useStyles from './list-notes-styles';

const ListNotes = ({ folders, activeFolderId }) => {
  const classes = useStyles();

  return (
    <Droppable droppableId="droppableNote">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Box className={classes.listNotes}>
            {
              activeFolderId === null
                ? 'List of the notes' 
                : folders[folders.findIndex((item) => item.id === activeFolderId)].notes.map((item, index) => {

                  return (
                    <ListNotesItem 
                      key={item.id}
                      classes={classes}
                      id={item.id}
                      title={item.title}
                      index={index}
                    />
                  );
                })
            }
          </Box>
          {provided.placeholder}
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

export default connect(mapStateToProps, null)(ListNotes);
