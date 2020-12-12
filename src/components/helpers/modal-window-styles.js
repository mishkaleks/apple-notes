// Material-UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  modalOverlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '9999',
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    padding: '0 30px',
    background: 'linear-gradient(180deg, rgba(241,241,241,0.85) 0%, rgba(241,241,241,1) 100%)',
    webkitBoxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
    mozBoxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
    boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
    userSelect: 'none'
  },
  modalWindow: {
    width: '100%',
    maxWidth: '350px',
    padding: '30px',
    background: '#fff',
    webkitBoxShadow: '0px 0px 15px -10px #000000',
    mozBoxShadow: '0px 0px 15px -10px #000000',
    boxShadow: '0px 0px 15px -10px #000000'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '5px',
    borderBottom: '1px solid #f1f1f1'
  },
  modalTitle: {
    fontSize: '20px'
  },
  closeModalBtn: {
    cursor: 'pointer'
  },
  modalBody: {
    margin: '10px 0 15px'
  },
  modalFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalBtns: {
    padding: '6px 8px',
    background: 'none',
    boxShadow: 'none',
    fontSize: '0.875rem',
    color: '#1976d2',
    '&:hover': {
      backgroundColor: 'rgba(25, 118, 210, 0.04)',
      boxShadow: 'none'
    }
  },
  modalBtnCancel: {
    marginRight: '15px'
  }
}));

export default useStyles;
