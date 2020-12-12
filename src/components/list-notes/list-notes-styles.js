// Material-UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  listNotes: {
    width: '325px',
    height: 'calc(100vh - 64px)',
    padding: '15px',
    overflow: 'scroll',
    backgroundColor: '#cfe8fc',
    '@media screen and (max-width: 991px)': {
      width: '100%',
      height: 'calc(50vh)'
    }
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
    '&:hover $inactiveNoteName': {
      color: '#fff'
    },
    '&:hover $timeCreation': {
      color: '#fff'
    },
    '&:hover $noteBtnsIncons': {
      color: '#fff'
    }
  },
  activeNoteListItem: {
    background: '#3f51b5'
  },
  unclickableNoteListItem: {
    opacity: '0.6',
    pointerEvents: 'none'
  },
  wrNoteName: {
    display: 'flex',
    flexDirection: 'column'
  },
  inactiveNoteName: {
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
    background: 'none',
    color: '#000',
    pointerEvents: 'none'
  },
  activeNoteName: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    width: '120px',
    border: '1px solid #fff',
    borderRadius: '5px',
    marginRight: '5px',
    padding: '5px',
    boxShadow: 'none',
    outline: 'none',
    background: 'none',
    pointerEvents: 'auto'
  },
  activeNoteNameText: {
    color: '#fff'
  },
  timeCreation: {
    padding: '5px 5px 0 5px',
    fontSize: '10px'
  },
  inactiveTimeCreation: {
    color: '#fff'
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
  inactiveNoteControlBtns: {
    pointerEvents: 'none',
    opacity: '0.3',
    '& svg': {
      color: '#fff'
    }
  },
  activeAcceptNoteNameBtn: {
    display: 'block'
  },
  inactiveAcceptNoteNameBtn: {
    display: 'none'
  },
  noteBtnsIncons: {
    fontSize: '1rem'
  },
  inactiveNoteBtnsIncons: {
    color: '#fff'
  }
}));

export default useStyles;
