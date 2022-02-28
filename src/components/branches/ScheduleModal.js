import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { TextField, Typography, Button } from "@material-ui/core/";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  root: {
    display: "flex",
    flexDirection: "column",
  },

  textField1: {
    marginBottom: theme.spacing(1.5),
  },

  textField: {
    margin: theme.spacing(2),
  },

  button: {
    width: "50%",
    margin: "0.8rem auto 0.1rem auto",
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const ScheduleModal = (props) => {
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      className={classes.modal}
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <div className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
            <Typography variant="h6">
              Schedule an Appointment With us
            </Typography>
            <TextField
              id="standard-basic"
              label="Full Name"
              className={classes.textField1}
            />
            <TextField
              id="standard-basic"
              label="E-Mail"
              className={classes.textField1}
            />
            <TextField
              id="datetime-local"
              label="Proposed Appointment Date/Time"
              type="datetime-local"
              defaultValue="2021-01-24T10:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              type
              onClick={props.handleClose}
            >
              Submit
            </Button>
          </form>
        </div>
      </Fade>
    </Modal>
  );
};

export default ScheduleModal;
