const initialState = {
  folders: []
};

const ADD_FOLDER_TO_NOTES = 'ADD_FOLDER_TO_NOTES';
const DELETE_FOLDER_TO_NOTES = 'DELETE_FOLDER_TO_NOTES';

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

export {
  onAddFolder,
  onDeleteFolder
};
