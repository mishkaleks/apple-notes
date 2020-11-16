const initialState = {
  folders: [],
  newFolderName: '',
  activeFolderId: null,
  activeNoteId: null
};

const ADD_FOLDER_TO_NOTES = 'ADD_FOLDER_TO_NOTES';
const DELETE_FOLDER_TO_NOTES = 'DELETE_FOLDER_TO_NOTES';
const EDIT_FOLDER_NAME_TO_NOTES = 'EDIT_FOLDER_NAME_TO_NOTES';
const GET_FOLDER_NAME_TO_NOTES = 'GET_FOLDER_NAME_TO_NOTES';
const ACCEPT_FOLDER_NAME_TO_NOTES = 'ACCEPT_FOLDER_NAME_TO_NOTES';
const GET_ACTIVE_FOLDER_TO_NOTES = 'GET_ACTIVE_FOLDER_TO_NOTES';
const ADD_NOTE_TO_FOLDER = 'ADD_NOTE_TO_FOLDER';
const DELETE_NOTE_TO_FOLDER = 'DELETE_NOTE_TO_FOLDER';

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FOLDER_TO_NOTES:
      return {
        ...state,
        folders: [...state.folders, action.item]
      };
    case DELETE_FOLDER_TO_NOTES:
      return {
        ...state,
        folders: [...state.folders.slice(0, action.id), ...state.folders.slice(action.id + 1)],
        activeFolderId: null
      };
    case EDIT_FOLDER_NAME_TO_NOTES:
      return {
        ...state,
        folders: [...state.folders.slice(0, action.id), action.item, ...state.folders.slice(action.id + 1)]
      };
    case GET_FOLDER_NAME_TO_NOTES:
      return {
        ...state,
        newFolderName: action.payload
      };
    case ACCEPT_FOLDER_NAME_TO_NOTES:
      return {
        ...state,
        folders: [...state.folders.slice(0, action.id), action.item, ...state.folders.slice(action.id + 1)],
        newFolderName: ''
      }; 
    case GET_ACTIVE_FOLDER_TO_NOTES:
      return {
        ...state,
        activeFolderId: action.id
      }; 
    case ADD_NOTE_TO_FOLDER:
      return {
        ...state,
        folders: [
          ...state.folders.map((item) => item.id === state.activeFolderId 
            ? {...item, notes: [...item.notes, action.item]} 
            : item
          )
        ]
      };
    case DELETE_NOTE_TO_FOLDER:
      return {
        ...state,
        folders: [
          ...state.folders.map((item) => item.id === state.activeFolderId 
            ? {...item, notes: [...item.notes.slice(0, action.id), ...item.notes.slice(action.id + 1)]} 
            : item
          )
        ]
      };
    default:
      return state;
  }
};

export default reducer;

const onAddFolder = (item) => {
  return {
    type: 'ADD_FOLDER_TO_NOTES',
    item
  };
};

const onDeleteFolder = (id) => {
  return {
    type: 'DELETE_FOLDER_TO_NOTES',
    id
  };
};

const onEditFolderName = (id, item) => {
  return {
    type: 'EDIT_FOLDER_NAME_TO_NOTES',
    id,
    item
  };
};

const getFolderName = (event) => {
  return {
    type: 'GET_FOLDER_NAME_TO_NOTES',
    payload: event.target.value
  };
};

const onAcceptFolderName = (id, item) => {
  return {
    type: 'ACCEPT_FOLDER_NAME_TO_NOTES',
    id,
    item
  };
};

const onActiveFolder = (id) => {
  return {
    type: 'GET_ACTIVE_FOLDER_TO_NOTES',
    id
  };
};

const onCreateNewNote = (item) => {
  return {
    type: 'ADD_NOTE_TO_FOLDER',
    item
  };
};

const onDeleteNote = (id) => {
  return {
    type: 'DELETE_NOTE_TO_FOLDER',
    id
  };
};

export {
  onAddFolder,
  onDeleteFolder,
  onEditFolderName,
  getFolderName,
  onAcceptFolderName,
  onActiveFolder,
  onCreateNewNote,
  onDeleteNote
};
