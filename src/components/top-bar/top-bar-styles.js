// Material-UI
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  сreateNewFolderIcon: {
    color: '#fff'
  },
  inactiveCreateNewNoteBtn: {
    pointerEvents: 'none'
  },
  activeCreateNewNoteBtn: {
    pointerEvents: 'auto',
  },
  inactiveNoteAddIcon: {
    opacity: '0.9'  
  },
  activeNoteAddIcon: {
    color: '#fff'
  }
}));

export default useStyles;
