// Base
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Material-UI
import { IconButton } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

// Beautiful DND
import { Draggable } from "react-beautiful-dnd";

// Component
import ItemName from '../item-name/item-name';

// Styles
import folderStyles from './folder-list-item-styles';
import noteStyles from './note-list-item-styles';

const ListItem = (props) => {
  const { 
    getItemStyle,
    typeStyles,
    id,
    title,
    edited,
    startTime,
    index,
    isDrag,
    isSelected,
    isEditable,
    isDisabledFolders,
    handleOnActiveItem,
    handleClickItemName,
    handleGetItemName, 
    handleOnAcceptItemName,
    handleOnEditItemName,
    handleOnDeleteItem
  } = props;
  const useFolderStyles = folderStyles();
  const useNoteStyles = noteStyles();
  const classes = typeStyles ? useFolderStyles : useNoteStyles;

  return (
    <Draggable draggableId={`${id}`} index={index} isDragDisabled={isDrag}>
      {(provided, snapshot) => (
        <li 
          onClick={handleOnActiveItem}
          className={clsx(classes.listItem, {
            [classes.activeListItem]: isSelected,
            [classes.unclickableListItem]: isEditable && !isSelected,
            [classes.unclickableListItems]: isDisabledFolders
          })}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <div className={classes.wrOutsideListItem}>
            <ItemName
              classes={classes}
              title={title}
              edited={edited}
              handleClickItemName={handleClickItemName}
              handleGetItemName={handleGetItemName}
            />

            <div className={classes.wrControlBtns}>
              {
                edited && 
                  <IconButton 
                    onClick={handleOnAcceptItemName}  
                    aria-label="check" 
                    className={clsx({
                      [classes.editableControlBtns]: isSelected
                    })}
                  >
                    <CheckIcon className={classes.btnsIncons}  />
                  </IconButton>
              } 

              <IconButton 
                onClick={handleOnEditItemName} 
                aria-label="edit" 
                disabled={edited && isSelected}
                className={clsx(classes.controlBtns, {
                  [classes.editableControlBtns]: isSelected
                })}
              >
                <EditIcon className={classes.btnsIncons} />
              </IconButton>

              <IconButton 
                onClick={handleOnDeleteItem} 
                aria-label="delete" 
                disabled={edited && isSelected}
                className={clsx(classes.controlBtns, {
                  [classes.editableControlBtns]: isSelected
                })}
              >
                <DeleteIcon className={classes.btnsIncons} />
              </IconButton>
            </div>
          </div>

          <div className={classes.timeCreation}>{ startTime }</div>
        </li>
      )}
    </Draggable>
  );
};

ListItem.propTypes = {
  getItemStyle: PropTypes.func,
  typeStyles: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  edited: PropTypes.bool,
  startTime: PropTypes.string,
  index: PropTypes.number,
  isDrag: PropTypes.bool,
  isSelected: PropTypes.bool,
  isEditable: PropTypes.bool,
  isDisabledFolders: PropTypes.bool,
  handleOnActiveItem: PropTypes.func,
  handleClickItemName: PropTypes.func,
  handleGetItemName: PropTypes.func,
  handleOnAcceptItemName: PropTypes.func,
  handleOnEditItemName: PropTypes.func,
  handleOnDeleteItem: PropTypes.func
};
 
export default ListItem;
