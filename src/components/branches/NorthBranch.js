import React, { useState } from "react";
import { Box, makeStyles, Typography, Button, Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import { lefttoRightVariants } from "../../animations/animations";
import ScheduleModal from "./ScheduleModal";
import { useTheme, useMediaQuery } from "@material-ui/core";
import locImage1 from "../../images/alex-kotliarskyi-QBpZGqEMsKg-unsplash (1).jpg";

const useStyles = makeStyles((theme) => ({
  branchinfo: {
    margin: "1rem auto 19rem auto",
    position: "relative",
  },

  branchImg: {
    width: "90vw",
    height: "45rem",
    filter: "brightness(50%)",
  },

  branchbox: {
    position: "absolute",
    width: "30rem",
    color: "white",
    top: "5rem",
    right: "5rem",
    backgroundColor: "rgba(63,81,181, 0.7)",
    padding: "1rem",
    textAlign: "center",
    borderRadius: "10px",
  },

  branchtext: {
    margin: "1rem auto",
    textAlign: "justify",
  },

  generalinfo: {
    position: "absolute",
    width: "50rem",
    height: "20rem",
    top: "40rem",
    left: "15rem",
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    border: `2px solid ${theme.palette.error.main}`,
    background: theme.palette.warning.light,
  },

  generalhead: {
    textAlign: "center",
    padding: theme.spacing(2),
    color: theme.palette.error.main,
  },
}));

const NorthBranch = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const MQlg = useMediaQuery(theme.breakpoints.down("lg")); //1280px
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //960px

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      className={classes.branchinfo}
      component={motion.div}
      variants={lefttoRightVariants}
      initial="hidden"
      animate="visible"
    >
      <img src={locImage1} alt="office1" className={classes.branchImg} />
      <Box className={classes.branchbox}>
        <Typography variant={MQmd ? "h3" : MQlg ? "h2" : "h4"}>
          North Branch
        </Typography>
        <Typography
          variant={MQmd ? "subtitle1" : MQlg ? "h6" : "subtitle1"}
          className={classes.branchtext}
        >
          Visit Mountain America Credit Union’s American Fork Branch at 893 W
          State St, American Fork, Utah, 84003, for your banking needs. Services
          include checking and savings accounts, auto and home loans, and
          personal finance consulting. Drive up, ATM, and online banking
          services are also available.
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleOpen}>
          Schedule an Appointment
        </Button>
      </Box>
      <Box className={classes.generalinfo}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <Typography
              variant={MQmd ? "h4" : MQlg ? "h3" : "h5"}
              bold
              className={classes.generalhead}
            >
              General Info
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant={MQmd ? "h6" : MQlg ? "h5" : "h6"} bold>
              Address
            </Typography>
            <Typography variant={MQmd ? "body2" : MQlg ? "body1" : "body2"}>
              893 W. State St American Fork, UT 84003
            </Typography>
            <Typography variant={MQmd ? "body2" : MQlg ? "body1" : "body2"}>
              (801) 763-0133
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant={MQmd ? "h6" : MQlg ? "h5" : "h6"} bold>
              Lobby Hours
            </Typography>
            <Typography variant={MQmd ? "body2" : MQlg ? "body1" : "body2"}>
              Monday - Friday:
            </Typography>
            <Typography variant={MQmd ? "body2" : MQlg ? "body1" : "body2"}>
              9:00 AM - 6:00 PM
            </Typography>
            <Typography variant={MQmd ? "body2" : MQlg ? "body1" : "body2"}>
              Saturday:
            </Typography>
            <Typography variant={MQmd ? "body2" : MQlg ? "body1" : "body2"}>
              9:00 AM - 2:00 PM
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant={MQmd ? "h6" : MQlg ? "h5" : "h6"} bold>
              Products
            </Typography>
            <Typography variant={MQmd ? "body2" : MQlg ? "body1" : "body2"}>
              Auto Loan Origination
            </Typography>
            <Typography variant={MQmd ? "body2" : MQlg ? "body1" : "body2"}>
              Home Loans: <br />{" "}
              <Button onClick={handleOpen}>Schedule an Appointment</Button>
            </Typography>
            <Typography variant={MQmd ? "body2" : MQlg ? "body1" : "body2"}>
              Investments: <br />
              <Button onClick={handleOpen}>Schedule an Appointment</Button>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <ScheduleModal open={open} handleClose={handleClose} />
    </Box>
  );
};

export default NorthBranch;
