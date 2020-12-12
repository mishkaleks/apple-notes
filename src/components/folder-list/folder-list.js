// Base
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Beautiful DND
import { Droppable } from "react-beautiful-dnd";

// Components
import FolderListItem from '../folder-list-item/folder-list-item';

class FolderList extends Component {

  static propTypes = {
    folders: PropTypes.array
  };

  render() {
    const { setOpen, isMobile, classes, folders } = this.props;

    return (
      <Droppable droppableId="droppableFolder" isCombineEnabled >
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <div className={classes.wrFolderList}>
              <ul className={classes.folderList}>
                {folders.map((item, index) => {
                  return (
                    <FolderListItem
                      setOpen={setOpen}
                      isMobile={isMobile}
                      key={item.id} 
                      classes={classes} 
                      id={item.id} 
                      title={item.title}
                      index={index}
                    />
                  );
                })}
              </ul>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  };
};

const mapStateToProps = ({ folders }) => {
  return {
    folders
  };
};

export default connect(mapStateToProps, null)(FolderList);
