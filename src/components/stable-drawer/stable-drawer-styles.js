// Material-UI
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
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
  wrLogo: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  }
}));

export default useStyles;
