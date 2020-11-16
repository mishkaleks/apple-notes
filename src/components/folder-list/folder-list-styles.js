// Material-UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  folderList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  inactiveFolderListItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    margin: '5px',
    padding: '15px 5px',
    cursor: 'pointer',
    '&:hover': {
      background: '#cfe8fc'
    },
    '&:hover $inactiveFolderName': {
      color: '#000'
    }
  },
  activeFolderListItem: {
    background: '#cfe8fc',
    color: '#000'
  },
  unclickableFolderListItem: {
    opacity: '0.6',
    pointerEvents: 'none'
  },
  inactiveFolderName: {
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
    pointerEvents: 'none'
  },
  activeFolderName: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    width: '120px',
    border: '1px solid #cfe8fc',
    borderRadius: '5px',
    marginRight: '5px',
    padding: '5px',
    boxShadow: 'none',
    outline: 'none',
    background: '#fff',
    pointerEvents: 'auto'
  },
  wrFolderControlBtns: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  folderControlBtns: {
    padding: '10px',
    fontSize: '1rem'
  },
  inactiveFolderControlBtns: {
    pointerEvents: 'none',
    opacity: '0.3'
  },
  activeAcceptFolderNameBtn: {
    display: 'block'
  },
  inActiveAcceptFolderNameBtn: {
    display: 'none'
  },
  folderBtnsIncons: {
    fontSize: '1rem'
  }
}));

export default useStyles;
