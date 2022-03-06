import React, { useState } from "react";
import { Box, makeStyles, Typography, Button, Grid } from "@material-ui/core";
import locImage2 from "../../images/campaign-creators-gMsnXqILjp4-unsplash.jpg";

import ScheduleModal from "./ScheduleModal";

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

const EastBranch = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.branchinfo}>
      <img src={locImage2} alt="office2" className={classes.branchImg} />
      <Box className={classes.branchbox}>
        <Typography variant="h2">East Branch</Typography>
        <Typography variant="h6" className={classes.branchtext}>
          Visit Mountain America Credit Union’s 47th South Branch at 2627 W 4700
          S, Taylorsville, Utah, 84129 for your banking needs. Services include
          checking and savings accounts, auto and home loans, and personal
          finance consulting. Drive up and ATM banking services are available at
          the 47th So. Branch.
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleOpen}>
          Schedule an Appointment
        </Button>
      </Box>
      <Box className={classes.generalinfo}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h3" bold className={classes.generalhead}>
              General Info
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" bold>
              Address
            </Typography>
            <Typography variant="body1">
              2627 W. 4700 S. Taylorsville, UT 84129
            </Typography>
            <Typography variant="body1">(801) 966-2165</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" bold>
              Lobby Hours
            </Typography>
            <Typography variant="body1">Monday - Friday:</Typography>
            <Typography variant="body1">9:00 AM - 6:00 PM</Typography>
            <Typography variant="body1">Saturday:</Typography>
            <Typography variant="body1">9:00 AM - 2:00 PM</Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="h5" bold>
              Products
            </Typography>
            <Typography variant="body1">Auto Loan Origination</Typography>
            <Typography variant="body1">
              Home Loans: <br />{" "}
              <Button onClick={handleOpen}>Schedule an Appointment</Button>
            </Typography>
            <Typography variant="body1">
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

export default EastBranch;