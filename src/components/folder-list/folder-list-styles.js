// Material-UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  folderList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  folderListItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    margin: '5px',
    padding: '15px 5px'
  },
  activeFolderListItem: {
    background: '#cfe8fc'
  },
  folderName: {
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
  wrFolderBtns: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  acceptNameBtn: {
    display: 'none'
  },
  checkIcon: {
    fontSize: '1rem'
  },
  editFolderNameBtn: {
    padding: '10px',
    fontSize: '1rem'
  },
  editIcon: {
    fontSize: '1rem'
  },
  deleteFolderNameBtn: {
    padding: '10px',
    fontSize: '1rem'
  }, 
  deleteIcon: {
    fontSize: '1rem'
  }
}));

export default useStyles;
