// Base
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// React
import { connect } from 'react-redux';
import { onDeleteFolder, onDeleteNote, onCloseModal } from '../../reducers/index';

// Material-UI
import { Box, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

// Styles
import useStyles from './modal-window-styles';

const ModalWindow = ({ isOpen, typeModal, onDeleteFolder, onDeleteNote, onCloseModal }) => {
  const classes = useStyles();
  const typeFlag = String(typeModal);

  const handleOnAcceptDeleteNote = () => {
    onDeleteNote();
    onCloseModal();
  };

  const handleOnAcceptDeleteFolder = () => {
    onDeleteFolder();
    onCloseModal();
  };

  return (
    <>
      { isOpen &&
        <Box className={classes.modalOverlay}>
          <Box className={classes.modalWindow}>
            <Box className={classes.modalHeader}>
              <Box className={classes.modalTitle}>
                Delete this {typeModal}?
              </Box>
              <CloseIcon onClick={onCloseModal} className={classes.closeModalBtn} />
            </Box>
            <Box className={classes.modalBody}>
              <Box component='span' className={classes.modalText}>
                Are you sure you want to delete this {typeModal}?
              </Box>
            </Box>
            <Box className={classes.modalFooter}>
              <Button
                variant="contained"
                className={clsx(classes.modalBtns, classes.modalBtnCancel)}
                onClick={onCloseModal}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.modalBtns}
                onClick={typeFlag === 'note' ? handleOnAcceptDeleteNote : handleOnAcceptDeleteFolder}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      }
    </>
  );
};

const mapStateToProps = ({ typeModal }) => {
  return {
    typeModal
  };
};

const mapDispatchToProps = {
  onDeleteFolder,
  onDeleteNote,
  onCloseModal
}

ModalWindow.propTypes = {
  typeModal: PropTypes.string,
  onDeleteFolder: PropTypes.func,
  onDeleteNote: PropTypes.func,
  onCloseModal: PropTypes.func
};
 
export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
