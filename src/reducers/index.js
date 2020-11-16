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
      const id = state.folders.length === 0 ? 0 : state.folders[state.folders.length - 1].id + 1;
      const newFolder = {
        id,
        title: `New Foolder ${id + 1}`,
        notes: [],
        edited: false
      };

      return {
        ...state,
        folders: [...state.folders, newFolder]
      };
    case DELETE_FOLDER_TO_NOTES:
      const deleteId = state.folders.findIndex((item) => item.id === action.payload);
      action.event.stopPropagation();
      
      return {
        ...state,
        folders: [...state.folders.slice(0, deleteId), ...state.folders.slice(deleteId + 1)],
        activeFolderId: null
      };
    case EDIT_FOLDER_NAME_TO_NOTES:
      const idEditedFolder = state.folders.findIndex((item) => item.id === action.payload);
      const editedFolder = state.folders[idEditedFolder];
      const updateEditedFolder = {
        ...editedFolder,
        edited: true
      };

      return {
        ...state,
        folders: [...state.folders.slice(0, idEditedFolder), updateEditedFolder, ...state.folders.slice(idEditedFolder + 1)]
      };
    case GET_FOLDER_NAME_TO_NOTES:
      return {
        ...state,
        newFolderName: action.payload
      };
    case ACCEPT_FOLDER_NAME_TO_NOTES:
      const oldFolderId = state.folders.findIndex((item) => item.id === action.payload);
      const oldFolder = state.folders[oldFolderId];
      const newFolderName = state.newFolderName ? state.newFolderName : oldFolder.title;
      const updateFolder = {
        ...oldFolder,
        title: newFolderName,
        edited: !oldFolder.edited
      };

      return {
        ...state,
        folders: [...state.folders.slice(0, oldFolderId), updateFolder, ...state.folders.slice(oldFolderId + 1)],
        newFolderName: ''
      }; 
    case GET_ACTIVE_FOLDER_TO_NOTES:
      return {
        ...state,
        activeFolderId: action.payload
      }; 
    case ADD_NOTE_TO_FOLDER:
      const idFolder = state.folders.findIndex((item) => item.id === state.activeFolderId);
      const idNote = state.folders[idFolder].notes.length === 0 
        ? 0 
        : state.folders[idFolder].notes[state.folders[idFolder].notes.length - 1].id + 1;
      const newNote = {
        id: idNote,
        title: `New Note ${idNote + 1}`,
        content: ''
      };
    
      return {
        ...state,
        folders: [...state.folders.map((item) => item.id === state.activeFolderId ? {...item, notes: [...item.notes, newNote]} : item)]
      };
    case DELETE_NOTE_TO_FOLDER:
      const activeFolderId = state.folders.findIndex((item) => item.id === state.activeFolderId);
      const deleteNoteId = state.folders[activeFolderId].notes.findIndex((item) => item.id === action.payload);

      return {
        ...state,
        folders: [
          ...state.folders.map((item) => item.id === state.activeFolderId 
            ? {...item, notes: [...item.notes.slice(0, deleteNoteId), ...item.notes.slice(deleteNoteId + 1)]} 
            : item
          )
        ]
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

const onDeleteFolder = (id, e) => {
  return {
    type: 'DELETE_FOLDER_TO_NOTES',
    payload: id,
    event: e
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

const onActiveFolder = (id) => {
  return {
    type: 'GET_ACTIVE_FOLDER_TO_NOTES',
    payload: id
  };
};

const onCreateNewNote = () => {
  return {
    type: 'ADD_NOTE_TO_FOLDER'
  };
};

const onDeleteNote = (id) => {
  return {
    type: 'DELETE_NOTE_TO_FOLDER',
    payload: id
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
