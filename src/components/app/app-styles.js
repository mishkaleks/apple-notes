// Material-UI
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    height: 'calc(100vh - 20px)',
    marginLeft: -drawerWidth,
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  drawerHeader: {    
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    borderBottom: '1px solid #ddd',
    padding: theme.spacing(0, 1),
    // Necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  wrColumn: {
    display: 'flex',
    flexGrow: 1,
    '@media screen and (max-width: 991px)': {
      flexDirection: 'column'
    }
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  // NoteContent styles
  wrNoteContent: {
    position: 'relative',
    width: 'calc(100% - 325px)',
    '@media screen and (max-width: 991px)': {
      width: '100%',
      height: '100%'
    }
  },
  // NoteText styles
  noteContent: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flexGrow: 1,
    width: '100%',
    border: 'none',
    padding: '15px',
    resize: 'none',
    '&:focus': {
      outline: 'none'
    }
  }
}));

export default useStyles;
