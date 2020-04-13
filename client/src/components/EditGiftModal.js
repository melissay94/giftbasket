import React from 'react';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditGiftForm from "./EditGiftForm";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    textAlign: 'center',
  },
}));

function EditGiftModal({
  isShowing,
  toggleModal,
  gift
}) {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="edit gift modal"
      aria-describedby="A modal for editing an existing gift"
      className={classes.modal}
      open={isShowing}
      onClose={() => toggleModal(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={isShowing}>
        <div className={`${classes.paper} no-outline`}>
          <EditGiftForm gift={gift} toggleModal={toggleModal} />
        </div>
      </Fade>
    </Modal>
  );
}

export default EditGiftModal;