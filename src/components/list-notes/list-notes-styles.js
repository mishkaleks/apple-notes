// Material-UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  listNotes: {
    width: '270px',
    padding: '15px',
    overflow: 'scroll',
    backgroundColor: '#cfe8fc'
  },
  inactiveNoteListItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    margin: '5px',
    padding: '15px 5px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    '&:hover': {
      border: '1px solid #fff',
      background: '#3f51b5'
    },
    '&:hover $noteName': {
      color: '#fff'
    },
    '&:hover $noteBtnsIncons': {
      color: '#fff'
    }
  },
  activeNoteListItem: {
    background: '#3f51b5',
    color: '#000'
  },
  unclickableNoteListItem: {
    opacity: '0.6',
    pointerEvents: 'none'
  },
  noteName: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    width: '120px',
    border: 'none',
    borderRadius: '5px',
    marginRight: '5px',
    padding: '5px',
    boxShadow: 'none',
    outline: 'none',
    background: 'none'
  },
  wrNoteControlBtns: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  noteControlBtns: {
    padding: '10px',
    fontSize: '1rem'
  },
  acceptNoteNameBtn: {
    display: 'none'
  },
  noteBtnsIncons: {
    fontSize: '1rem'
  }
}));

export default useStyles;
