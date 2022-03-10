import React from "react";
import { Box, makeStyles, Typography, Avatar, Grid } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import { motion } from "framer-motion";
import { lefttoRightVariants } from "../animations/animations";
import { useTheme, useMediaQuery } from "@material-ui/core";
import TylerImage from "../images/19.jpg";
import TommyImage from "../images/51.jpg";
import AccountingImage from "../images/kelly-sikkema-SiOW0btU0zk-unsplash.jpg";

const useStyles = makeStyles((theme) => ({
  accounting: {
    paddingTop: "6rem",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    height: "135vh",
    background: theme.palette.primary.dark,

    [theme.breakpoints.down("md")]: {
      height: "110vh",
    },
    [theme.breakpoints.down("sm")]: {
      height: "140vh",
      width: "auto",
    },
  },

  header: {
    color: theme.palette.error.dark,
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },

  header2: {
    color: "white",
    textTransform: "capitalize",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },

  body: {
    display: "flex",
    margin: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  textsection: {
    margin: "0.2rem 2rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0.2rem auto",
    },
  },

  boxheader: {
    fontWeight: theme.typography.fontWeightBold,
    color: "white",
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },

  boxparag: {
    textAlign: "justify",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },

  accountingstaff: {
    border: `2px solid ${theme.palette.error.dark}`,
    background: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    width: "50rem",
    marginTop: "5.5rem",
    marginRight: "0.1rem",
    [theme.breakpoints.down("lg")]: {
      width: "45rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "35rem",
      marginTop: "4rem",
      marginLeft: "0.5rem",
      marginRight: "auto",
      textAlign: "center",
    },
  },

  staffimage: {
    marginLeft: "2.5rem",
    height: "5rem",
    width: "5rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2rem",
      height: "4rem",
      width: "4rem",
    },
  },
  accountingimg: {
    width: "25rem",
    height: "35rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  staffpos: {
    color: "white",
    textTransform: "uppercase",
  },

  icons: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "white",
  },
}));

const Accounting = () => {
  const classes = useStyles();
  const theme = useTheme();
  const MQlg = useMediaQuery(theme.breakpoints.down("lg")); //1280px
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //960px
  const MQsm = useMediaQuery(theme.breakpoints.down("sm")); //600px

  return (
    <Box className={classes.accounting}>
      <Typography
        className={classes.header}
        variant={MQmd ? "subtitle1" : MQlg ? "h6" : "subtitle2"}
        align="center"
        color="red"
        gutterBottom
        component={motion.div}
        variants={lefttoRightVariants}
        initial="hidden"
        animate="visible"
      >
        • Accounting Department •
      </Typography>
      <Typography
        className={classes.header2}
        variant={MQmd ? "h3" : MQlg ? "h2" : "h4"}
        align="center"
        gutterBottom
        component={motion.div}
        variants={lefttoRightVariants}
        initial="hidden"
        animate="visible"
      >
        Your success is our business.
      </Typography>
      <Box
        className={classes.body}
        component={motion.div}
        variants={lefttoRightVariants}
        initial="hidden"
        animate="visible"
      >
        <Box className={classes.textsection}>
          <Typography
            variant={MQmd ? "h5" : MQlg ? "h4" : "h6"}
            gutterBottom
            className={classes.boxheader}
          >
            About our department
          </Typography>
          <Typography
            variant={MQmd ? "body2" : MQlg ? "body1" : "body2"}
            gutterBottom
            className={classes.boxparag}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            quaerat illo consequatur minus itaque aperiam dolor error tenetur
            vel, cupiditate exercitationem ut, corporis nam. Quos quod impedit
            necessitatibus minima omnis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Placeat accusantium qui error quis, esse
            laudantium omnis dolore, eius beatae molestias commodi corporis est
            magnam quisquam maxime eum iste. Tenetur, iusto?
          </Typography>
          <Grid
            container
            spacing={3}
            xs={12}
            alignItems="center"
            className={classes.accountingstaff}
          >
            <Grid item xs={3}>
              <Avatar
                alt="Tyler Ramirez"
                src={TylerImage}
                className={classes.staffimage}
              />
            </Grid>
            <Grid item xs={6} className={classes.staffpos}>
              <Typography
                variant={
                  MQsm
                    ? "subtitle2"
                    : MQmd
                    ? "subtitle1"
                    : MQlg
                    ? "h6"
                    : "subtitle2"
                }
              >
                Head of Accounting department
              </Typography>
              <Typography variant="body2">Tyler Ramirez</Typography>
            </Grid>
            <Grid item xs={3} className={classes.icons}>
              <LinkedInIcon
                fontSize={MQmd ? "medium" : MQlg ? "large" : "medium"}
              />
              <EmailIcon
                fontSize={MQmd ? "medium" : MQlg ? "large" : "medium"}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            xs={12}
            alignItems="center"
            className={classes.accountingstaff}
          >
            <Grid item xs={3}>
              <Avatar
                alt="Tommy Rodriguez"
                src={TommyImage}
                className={classes.staffimage}
              />
            </Grid>
            <Grid item xs={6} className={classes.staffpos}>
              <Typography
                variant={MQmd ? "subtitle1" : MQlg ? "h6" : "subtitle2"}
              >
                Accounting customer rep.
              </Typography>
              <Typography variant="body2">Tommy Rodriguez</Typography>
            </Grid>
            <Grid item xs={3} className={classes.icons}>
              <LinkedInIcon
                fontSize={MQmd ? "medium" : MQlg ? "large" : "medium"}
              />
              <EmailIcon
                fontSize={MQmd ? "medium" : MQlg ? "large" : "medium"}
              />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <img
            src={AccountingImage}
            alt="Accounting"
            className={classes.accountingimg}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Accounting;
