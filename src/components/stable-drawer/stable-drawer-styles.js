// Material-UI
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    '@media screen and (max-width: 667px)': {
      flexShrink: '1'
    }
  },
  drawerPaper: {
    width: drawerWidth,
    '@media screen and (max-width: 667px)': {
      width: '100%'
    }
  },
  drawerHeader: {    
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    borderBottom: '1px solid #ddd',
    padding: theme.spacing(0, 1),
    // Necessary for content to be below app bar
    ...theme.mixins.toolbar,
    '@media screen and (max-width: 667px)': {
      backgroundColor: '#3f51b5',
      color: '#fff'
    }
  },
  wrLogo: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  сreateNewFolderIcon: {
    color: '#fff'
  },
  drawerCloseBtn: {
    color: 'rgba(0, 0, 0, 0.54)',
    '@media screen and (max-width: 667px)': {
      color: '#fff'
    }
  }
}));

export default useStyles;
