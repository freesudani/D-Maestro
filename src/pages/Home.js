import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
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
    <div className={classes.home}>
      <Grid item xs={7}>
        <Typography variant="h2" className={classes.text} gutterBottom>
          pioneering
          <br /> the future of <span className={classes.textspan}>crypto </span>
          <span className={classes.textspan1}>crowdfunding</span>
        </Typography>
        <div className={classes.ispos}>
          <div className={classes.ispo}>
            <FlareIcon className={classes.flare} />
            <Typography gutterBottom>Wolrd's 1st ISPO platform</Typography>
          </div>
          <div className={classes.ispo}>
            <FlareIcon className={classes.flare} />
            <Typography gutterBottom>
              Discover, invest and launch ISPOs
            </Typography>
          </div>
        </div>
        <div className={classes.buttons}>
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
          <div className={classes.cardano}>
            <img src={Iconsvg} alt="icon" className={classes.cardanoicon} />
            <Button size="large" className={classes.cardanobutton}>
              Built on Cardano
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item xs={5} />
    </div>
  );
};

export default Home;
