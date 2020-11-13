// Material-UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrNoteContent: {
    width: 'calc(100% - 270px)'
  },
  noteContent: {
    flexGrow: 1,
    width: '100%',
    height: '100%',
    border: 'none',
    padding: '15px',
    resize: 'none',
    '&:focus': {
      outline: 'none'
    }
  }
}));

export default useStyles;
