const initialState = {
  folders: [],
  newFolderName: ''
};

const ADD_FOLDER_TO_NOTES = 'ADD_FOLDER_TO_NOTES';
const DELETE_FOLDER_TO_NOTES = 'DELETE_FOLDER_TO_NOTES';
const EDIT_FOLDER_NAME_TO_NOTES = 'EDIT_FOLDER_NAME_TO_NOTES';
const GET_FOLDER_NAME_TO_NOTES = 'GET_FOLDER_NAME_TO_NOTES';
const ACCEPT_FOLDER_NAME_TO_NOTES = 'ACCEPT_FOLDER_NAME_TO_NOTES';

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FOLDER_TO_NOTES:
      const id = state.folders.length === 0 ? 0 : state.folders[state.folders.length - 1].id + 1;
      const newFolder = {
        id,
        title: `New Foolder ${id + 1}`
      };

      return {
        folders: [...state.folders, newFolder],
        newFolderName: state.newFolderName
      };
    case DELETE_FOLDER_TO_NOTES:
      const deleteId = state.folders.findIndex((item) => item.id === action.payload);
      
      return {
        folders: [...state.folders.slice(0, deleteId), ...state.folders.slice(deleteId + 1)],
        newFolderName: state.newFolderName
      };
    case EDIT_FOLDER_NAME_TO_NOTES:
      document.getElementById(`acceptFolderName${action.payload}`).style.display = 'block';
      document.getElementById(`folderName${action.payload}`).removeAttribute('disabled', null);
      document.getElementById(`folderName${action.payload}`).setAttribute('style', 'border: 1px solid #cfe8fc');
      document.getElementById(`folderName${action.payload}`).focus();
      document.getElementById(`editFolderName${action.payload}`).setAttribute('style', 'pointer-events: none; opacity: 0.3');
      document.getElementById(`deleteFolderName${action.payload}`).setAttribute('style', 'pointer-events: none; opacity: 0.3');

      return {
        folders: state.folders,
        newFolderName: state.newFolderName
      };
    case GET_FOLDER_NAME_TO_NOTES:
      return {
        folders: state.folders,
        newFolderName: action.payload
      };
    case ACCEPT_FOLDER_NAME_TO_NOTES:
      const oldFolderId = state.folders.findIndex((item) => item.id === action.payload);
      const oldFolder = state.folders[oldFolderId];
      const updateFolder = {
        ...oldFolder,
        title: state.newFolderName
      }

      document.getElementById(`acceptFolderName${action.payload}`).style.display = 'none';
      document.getElementById(`folderName${action.payload}`).setAttribute('disabled', '');
      document.getElementById(`folderName${action.payload}`).removeAttribute('style', '');
      document.getElementById(`folderName${action.payload}`).blur();
      document.getElementById(`editFolderName${action.payload}`).removeAttribute('style', '');
      document.getElementById(`deleteFolderName${action.payload}`).removeAttribute('style', '');

      return {
        folders: [...state.folders.slice(0, oldFolderId), updateFolder, ...state.folders.slice(oldFolderId + 1)],
        newFolderName: state.newFolderName  
      };  
    default:
      return state;
  }
};

export default reducer;

const onAddFolder = () => {
  return {
    type: 'ADD_FOLDER_TO_NOTES'
  };
};

const onDeleteFolder = (id) => {
  return {
    type: 'DELETE_FOLDER_TO_NOTES',
    payload: id
  };
};

const onEditFolderName = (id) => {
  return {
    type: 'EDIT_FOLDER_NAME_TO_NOTES',
    payload: id
  };
};

const getFolderName = (event) => {
  return {
    type: 'GET_FOLDER_NAME_TO_NOTES',
    payload: event.target.value
  };
};

const onAcceptFolderName = (id) => {
  return {
    type: 'ACCEPT_FOLDER_NAME_TO_NOTES',
    payload: id
  };
};

export {
  onAddFolder,
  onDeleteFolder,
  onEditFolderName,
  getFolderName,
  onAcceptFolderName
};
