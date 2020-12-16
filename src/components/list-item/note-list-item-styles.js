// Material-UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ddd',
    borderRadius: '5px',
    margin: '5px',
    padding: '15px 5px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    '&:hover': {
        border: '1px solid #fff',
        background: '#3f51b5',
        color: '#fff'
    },
    '&:hover $btnsIncons': {
      color: '#fff'
    } 
  },
  activeListItem: {
    background: '#3f51b5',
    color: '#fff'
  },
  unclickableListItem: {
    opacity: '0.6',
    pointerEvents: 'none'
  },
  wrOutsideListItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    minHeight: '40px'
  },
  listItemName: {
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
  wrControlBtns: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  editableControlBtns: {
    '& svg': {
      color: '#fff'
    }
  },
  btnsIncons: {
    fontSize: '1rem'
  },
  controlBtns: {
    padding: '10px',
    fontSize: '1rem'
  },
  timeCreation: {
    fontSize: '10px'
  },
  disabledListItemName: {
    maxWidth: '266px',
    paddingRight: '5px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    padding: '5px',
    textOverflow: 'ellipsis'
  }
}));

export default useStyles;
