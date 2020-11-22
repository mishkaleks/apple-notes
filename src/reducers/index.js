const initialState = {
  folders: [],
  newFolderName: '',
  activeFolderId: null,
  newNoteName: '',
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
const EDIT_NOTE_NAME_TO_FOLDER = 'EDIT_NOTE_NAME_TO_FOLDER';
const GET_NOTE_NAME_TO_FOLDER = 'GET_NOTE_NAME_TO_FOLDER';
const ACCEPT_NOTE_NAME_TO_FOLDER = 'ACCEPT_NOTE_NAME_TO_FOLDER';
const GET_ACTIVE_NOTE_TO_FOLDER = 'GET_ACTIVE_NOTE_TO_FOLDER';
const GET_CONTENT_TO_NOTE = 'GET_CONTENT_TO_NOTE';
const REORDER_FOLDERS_TO_NOTES = 'REORDER_FOLDERS_TO_NOTES';
const REORDER_NOTES_TO_FOLDER = 'REORDER_NOTES_TO_FOLDER';
const MOVE_AND_REORDER_NOTES = 'MOVE_AND_REORDER_NOTES';

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
        activeFolderId: null,
        activeNoteId: null
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
        activeFolderId: action.id,
        activeNoteId: null
      }; 
    case ADD_NOTE_TO_FOLDER:
      return {
        ...state,
        folders: [
          ...state.folders.map((item) => item.id === state.activeFolderId 
            ? {...item, notes: [...item.notes, action.item], countNotes: item.countNotes + 1} 
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
        ],
        activeNoteId: null
      };
    case EDIT_NOTE_NAME_TO_FOLDER:
      return {
        ...state,
        folders: [
          ...state.folders.map((item) => item.id === state.activeFolderId
            ? {...item, notes: [...item.notes.slice(0, action.idx), action.item, ...item.notes.slice(action.idx + 1)]}
            : item
          )
        ],
        activeNoteId: action.id
      };
    case GET_NOTE_NAME_TO_FOLDER:
      return {
        ...state,
        newNoteName: action.payload
      };
    case ACCEPT_NOTE_NAME_TO_FOLDER:
      return {
        ...state,
        folders: [
          ...state.folders.map((item) => item.id === state.activeFolderId
            ? {...item, notes: [...item.notes.slice(0, action.id), action.item, ...item.notes.slice(action.id + 1)]}
            : item
          )
        ],
        newNoteName: ''
      };
    case GET_ACTIVE_NOTE_TO_FOLDER:
      return {
        ...state,
        activeNoteId: action.id
      };
    case GET_CONTENT_TO_NOTE:
      return {
        ...state,
        folders: [
          ...state.folders.map((item) => item.id === state.activeFolderId
            ? {...item, notes: [...item.notes.slice(0, action.id), action.item, ...item.notes.slice(action.id + 1)]}
            : item
          )
        ]
      };
    case REORDER_FOLDERS_TO_NOTES:
      return {
        ...state,
        folders: action.list
      };
    case REORDER_NOTES_TO_FOLDER:
      return {
        ...state,
        folders: [
          ...state.folders.map((item) => item.id === state.activeFolderId
            ? {...item, notes: action.list}
            : item
          )
        ]
      };
    case MOVE_AND_REORDER_NOTES:
      return {
        ...state,
        folders: action.list,
        activeNoteId: null
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

const onEditNoteName = (id, idx, item) => {
  return {
    type: 'EDIT_NOTE_NAME_TO_FOLDER',
    id,
    idx,
    item
  };
};

const getNoteName = (e) => {
  return {
    type: 'GET_NOTE_NAME_TO_FOLDER',
    payload: e.target.value
  };
};

const onAcceptNoteName = (id, item) => {
  return {
    type: 'ACCEPT_NOTE_NAME_TO_FOLDER',
    id,
    item
  };
};

const onActiveNote = (id) => {
  return {
    type: 'GET_ACTIVE_NOTE_TO_FOLDER',
    id
  };
};

const getNoteContent = (id, item) => {
  return {
    type: 'GET_CONTENT_TO_NOTE',
    id,
    item
  };
};

const onReorderFolders = (list) => {
  return {
    type: 'REORDER_FOLDERS_TO_NOTES',
    list
  };
};

const onReorderNotes = (list) => {
  return {
    type: 'REORDER_NOTES_TO_FOLDER',
    list
  };
};

const onMoveAndReorder = (list) => {
  return {
    type: 'MOVE_AND_REORDER_NOTES',
    list
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
  onDeleteNote,
  onEditNoteName,
  getNoteName,
  onAcceptNoteName,
  onActiveNote,
  getNoteContent,
  onReorderFolders,
  onReorderNotes,
  onMoveAndReorder
};
