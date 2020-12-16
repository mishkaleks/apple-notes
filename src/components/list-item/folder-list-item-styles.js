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
    cursor: 'pointer',
    '&:hover': {
      background: '#cfe8fc'
    }
  },
  activeListItem: {
    background: '#cfe8fc',
    color: '#000'
  },
  unclickableListItem: {
    opacity: '0.6',
    pointerEvents: 'none'
  },
  unclickableListItems: {
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
  btnsIncons: {
    fontSize: '1rem'
  },
  controlBtns: {
    padding: '10px',
    fontSize: '1rem'
  },
  disabledListItemName: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    padding: '5px',
    textOverflow: 'ellipsis'
  }
}));

export default useStyles;
