import React, { useState } from "react";
import {
  Box,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import locImage1 from "../images/alex-kotliarskyi-QBpZGqEMsKg-unsplash (1).jpg";
import locImage2 from "../images/campaign-creators-gMsnXqILjp4-unsplash.jpg";
import locImage3 from "../images/yibei-geng--UdYbiywGeg-unsplash.jpg";

const useStyles = makeStyles((theme) => ({
  location: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "6rem",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    height: "190vh",
    background: theme.palette.primary.dark,
  },

  selectbranch: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "5px",
    margin: "auto 32rem",
    background: "white",
  },

  formControl: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(1.5),
    width: 200,
    color: "white",
  },

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

const Locations = () => {
  const [state, setState] = useState({
    location: "",
    name: "hai",
  });

  const classes = useStyles();

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <Box className={classes.location}>
      <Box className={classes.selectbranch}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="branch">Branch Name</InputLabel>
          <Select
            native
            value={state.location}
            onChange={handleChange}
            inputProps={{
              name: "location",
              id: "branch",
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>North</option>
            <option value={20}>East</option>
            <option value={30}>West</option>
          </Select>
        </FormControl>
      </Box>
      <Box className={classes.branchinfo}>
        <img src={locImage1} alt="office1" className={classes.branchImg} />
        <Box className={classes.branchbox}>
          <Typography variant="h2">North Branch</Typography>
          <Typography variant="h6" className={classes.branchtext}>
            Visit Mountain America Credit Union’s American Fork Branch at 893 W
            State St, American Fork, Utah, 84003, for your banking needs.
            Services include checking and savings accounts, auto and home loans,
            and personal finance consulting. Drive up, ATM, and online banking
            services are also available.
          </Typography>
          <Button variant="outlined" color="secondary">
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
                893 W. State St American Fork, UT 84003
              </Typography>
              <Typography variant="body1">(801) 763-0133</Typography>
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
                Home Loans: <br /> Schedule an Appointment
              </Typography>
              <Typography variant="body1">
                Investments: <br />
                Schedule an Appointment
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Locations;
