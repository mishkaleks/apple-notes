// Base
import React from 'react';
import PropTypes from 'prop-types';

// Beautiful DND
import { Droppable } from "react-beautiful-dnd";

// Components
import FolderListItem from '../folder-list-item/folder-list-item';

const FolderList = ({ classes, folders, isMobile, setOpen }) => {
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
                    classes={classes} 
                    key={item.id} 
                    id={item.id} 
                    title={item.title}
                    index={index}
                    edited={item.edited}
                    isMobile={isMobile}
                    setOpen={setOpen}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </Droppable>
  );
};

FolderList.propTypes = {
  folders: PropTypes.array,
  isMobile: PropTypes.bool
};
 

export default FolderList;
