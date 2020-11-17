// Base
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { onReorderFolders } from '../../reducers/index';

// Beautiful DND
import { DragDropContext, Droppable } from "react-beautiful-dnd";

// Components
import FolderListItem from '../folder-list-item/folder-list-item';

class FolderList extends Component {

  reorder = (list, startIndex, endIndex) => {   
    const result = Array.from(list);
    // Deletes one element by startIndex
    const [removed] = result.splice(startIndex, 1);
    // Inserts a deleted item by endIndex
    result.splice(endIndex, 0, removed);

    return result;
  };

  onDragEnd = (result) => {
    const { folders, onReorderFolders } = this.props;

    // Dropped Outside The List
    if (!result.destination) return;

    const reorderFolders = this.reorder(
      folders,
      result.source.index,
      result.destination.index
    );

    onReorderFolders(reorderFolders);
  };

  render() {
    const { classes, folders } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
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
      </DragDropContext>  
    );
  };
};

const mapStateToProps = ({ folders }) => {
  return {
    folders
  };
};

const mapDispatchToProps = {
  onReorderFolders
};

export default connect(mapStateToProps, mapDispatchToProps)(FolderList);
