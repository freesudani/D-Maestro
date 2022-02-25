import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import FlareIcon from "@material-ui/icons/Flare";
import Iconsvg from "../images/2844382_ada_cardano_icon.svg";

const useStyles = makeStyles((theme) => ({
  home: {
    paddingTop: "8rem",
    paddingLeft: "2rem",
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.primary.dark,
    color: "white",
  },
  text: {
    textTransform: "capitalize",
    fontWeight: "bold",
  },

  textspan: {
    color: theme.palette.secondary.main,
  },

  textspan1: {
    background: "-webkit-linear-gradient(top left, #ff4081 20%, #f50057 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  ispos: { display: "flex", marginTop: "2rem" },
  ispo: {
    display: "flex",
    marginRight: "3.5rem",
  },
  flare: {
    marginRight: "0.5rem",
  },

  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginTop: "2.5rem",
  },

  button: {
    borderTopLeftRadius: "0px",
    borderBottomRightRadius: "0px",
    borderTopRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    color: "white",
    width: "10rem",
    height: "3rem",
  },

  cardanoicon: {
    width: "2rem",
  },

  cardano: {
    display: "flex",
    alignItems: "center",
  },

  cardanobutton: {
    color: "white",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.home}>
      <Grid item xs={7}>
        <Typography variant="h2" className={classes.text} gutterBottom>
          pioneering
          <br /> the future of{" "}
          <Box component="span" m={1} className={classes.textspan}>
            Crypto
            <br />
          </Box>
          <Box component="span" m={1} className={classes.textspan1}>
            Crowdfunding
          </Box>
        </Typography>
        <Box className={classes.ispos}>
          <Box className={classes.ispo}>
            <FlareIcon className={classes.flare} />
            <Typography gutterBottom>Wolrd's 1st ISPO platform</Typography>
          </Box>
          <Box className={classes.ispo}>
            <FlareIcon className={classes.flare} />
            <Typography gutterBottom>
              Discover, invest and launch ISPOs
            </Typography>
          </Box>
        </Box>
        <Box className={classes.buttons}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.button}
          >
            Explore
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            className={classes.button}
          >
            Create
          </Button>
          <Box className={classes.cardano}>
            <img src={Iconsvg} alt="icon" className={classes.cardanoicon} />
            <Button size="large" className={classes.cardanobutton}>
              Built on Cardano
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={5} />
    </Box>
  );
};

export default Home;
