// Material-UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrImgAddFolder: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    userSelect: 'none',
    textAlign: 'center',
    '& img': {
      width: '50px'
    }
  },
  stubText: {
    marginTop: '15px',
    fontWeight: 'bold',
    color: '#3f51b5'
  }
}));

export default useStyles;
