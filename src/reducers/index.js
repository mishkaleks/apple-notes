const initialState = {
  folders: []
};

const ADD_FOLDER_TO_NOTES = 'ADD_FOLDER_TO_NOTES';

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FOLDER_TO_NOTES:
      const id = state.folders.length;
      const newFolder = {
        id,
        title: `New Foolder ${id + 1}`
      };
      
      return {
        folders: [...state.folders, newFolder]  
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

export {
  onAddFolder
};