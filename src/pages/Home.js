import React, { useEffect, useContext } from "react";
import News from "../components/News";
import { Box, Button, Grid, Typography, makeStyles } from "@material-ui/core";
import { NewsContext } from "../store/news-context";
import { Oval } from "react-loader-spinner";
import FlareIcon from "@material-ui/icons/Flare";
import Iconsvg from "../images/2844382_ada_cardano_icon.svg";
import { motion } from "framer-motion";
import { lefttoRightVariants } from "../animations/animations";
import { useTheme, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  home: {
    display: "flex",
    paddingTop: "8rem",
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

  ispos: {
    display: "flex",
    marginTop: "2rem",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
    },
  },
  ispo: {
    display: "flex",
    marginRight: "3.5rem",
    [theme.breakpoints.down("md")]: {
      marginRight: "2rem",
    },
  },
  flare: {
    marginRight: "0.5rem",
    [theme.breakpoints.down("md")]: {
      marginRight: "0.4rem",
    },
  },

  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginTop: "2.5rem",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },

  button: {
    borderTopLeftRadius: "0px",
    borderBottomRightRadius: "0px",
    borderTopRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    color: "white",
    width: "10rem",
    height: "3rem",
    [theme.breakpoints.down("md")]: {
      width: "7rem",
    },
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
  news: {
    height: "80%",
    background: "rgba(0, 0, 0, 0.85)",
    borderRadius: "8px",
    border: "1px solid #fff",
    overflow: "scroll",
    overflowX: "hidden",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "7.5rem",
  },
}));

const Home = () => {
  const classes = useStyles();
  const ctx = useContext(NewsContext);
  const theme = useTheme();
  const MQlg = useMediaQuery(theme.breakpoints.down("lg")); //1280px
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //960px

  useEffect(() => {
    ctx.getnews();
  }, []);

  return (
    <Grid container xs={12} className={classes.home}>
      <Grid item md={1} xs={1} />
      <Grid
        item
        xs={10}
        md={6}
        component={motion.div}
        variants={lefttoRightVariants}
        initial="hidden"
        animate="visible"
      >
        <Typography
          variant={MQmd ? "h3" : MQlg ? "h2" : "h4"}
          className={classes.text}
          gutterBottom
        >
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
            <Typography gutterBottom variant={MQmd ? "caption" : "body1"}>
              Wolrd's 1st ISPO platform
            </Typography>
          </Box>
          <Box className={classes.ispo}>
            <FlareIcon className={classes.flare} />
            <Typography gutterBottom variant={MQmd ? "caption" : "body1"}>
              Discover, invest and launch ISPOs
            </Typography>
          </Box>
        </Box>
        <Box className={classes.buttons}>
          <Button
            variant="contained"
            color="secondary"
            size={MQlg ? "large" : "small"}
            className={classes.button}
          >
            Explore
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size={MQlg ? "large" : "small"}
            className={classes.button}
          >
            Create
          </Button>
          <Box className={classes.cardano}>
            <img src={Iconsvg} alt="icon" className={classes.cardanoicon} />
            <Button
              size={MQlg ? "large" : "small"}
              className={classes.cardanobutton}
            >
              Built on Cardano
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={0} md={4} className={classes.news}>
        {ctx.iL ? (
          <Box className={classes.loader}>
            <Oval
              height={160}
              width={160}
              color="#3f51b5"
              secondaryColor="#fff"
            />
          </Box>
        ) : (
          <News article={ctx.art} />
        )}
      </Grid>
      <Grid item md={1} xs={1} />
    </Grid>
  );
};

export default Home;
