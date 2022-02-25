import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles, Paper, Typography, Box } from "@material-ui/core";
import bgImage from "../images/pexels-revac-films&photography-205333.jpg";

const useStyles = makeStyles((theme) => ({
  social: {
    paddingTop: "6rem",
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${bgImage})`,
    backgroundSize: "cover",
    height: "100vh",
  },

  header: {
    color: theme.palette.error.dark,
    textTransform: "uppercase",
  },

  header2: {
    color: "white",
    textTransform: "capitalize",
    fontWeight: "bold",
  },

  header3: {
    color: "white",
  },

  papers: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  linkdinpaper: {
    background: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "8rem",
    height: "8rem",
    margin: "2.8rem 3rem",
    transform: "rotate(-3deg)",
  },

  linkdinIcon: {
    fontSize: "3rem",
    color: "white",
    transform: "rotate(-3deg)",
  },
  twiterpaper: {
    background: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "8rem",
    height: "8rem",
    margin: "2.8rem 3rem",
    transform: "rotate(3deg)",
  },

  twitterIcon: {
    fontSize: "3rem",
    color: "white",
    transform: "rotate(3deg)",
  },
  emailpaper: {
    background: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "8rem",
    height: "8rem",
    margin: "2rem 3rem",
  },

  emailIcon: {
    fontSize: "3rem",
    color: "white",
  },

  msgus: {
    color: "white",
    marginTop: "1rem",
  },
  msgusspan: {
    fontWeight: "bold",
  },
}));

const Socials = () => {
  const classes = useStyles();
  return (
    <Box className={classes.social}>
      <Typography
        className={classes.header}
        variant="h6"
        align="center"
        color="red"
        gutterBottom
      >
        • socials •
      </Typography>
      <Typography
        className={classes.header2}
        variant="h2"
        align="center"
        gutterBottom
      >
        Connect with us
      </Typography>
      <Typography
        className={classes.header3}
        variant="body2"
        align="center"
        gutterBottom
      >
        Follow our social media channels and join the community!
      </Typography>
      <Box className={classes.papers}>
        <Paper elevation={0} className={classes.linkdinpaper}>
          <LinkedInIcon className={classes.linkdinIcon} />
        </Paper>
        <Paper elevation={0} className={classes.emailpaper}>
          <EmailIcon className={classes.emailIcon} />
        </Paper>
        <Paper elevation={0} className={classes.twiterpaper}>
          <TwitterIcon className={classes.twitterIcon} />
        </Paper>
      </Box>
      <Typography
        className={classes.msgus}
        variant="body2"
        align="center"
        gutterBottom
      >
        Message us :{" "}
        <Box component="span" className={classes.msgusspan}>
          infor@Meastro.com
        </Box>
      </Typography>
    </Box>
  );
};

export default Socials;
