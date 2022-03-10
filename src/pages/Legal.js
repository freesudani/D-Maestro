import React from "react";
import {
  Box,
  makeStyles,
  Typography,
  Button,
  Grid,
  IconButton,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { motion } from "framer-motion";
import { lefttoRightVariants } from "../animations/animations";
import { useTheme, useMediaQuery } from "@material-ui/core";
import lawyerImage from "../images/pamela-buenrostro-3Vdf7wIJ7ds-unsplash.jpg";

const useStyles = makeStyles((theme) => ({
  legal: {
    paddingTop: "6rem",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    height: "115vh",
    background: theme.palette.primary.dark,
    [theme.breakpoints.down("md")]: {
      height: "125vh",
      paddingLeft: "0",
      paddingRight: "0",
    },
    [theme.breakpoints.down("sm")]: {
      height: "225vh",
    },
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

  lawyerheader: {
    color: "white",
    textTransform: "capitalize;",
  },

  lawyerparag: {
    color: "white",
    lineHeight: "3.5",
    fontFamily: "Comforter Brush",
  },

  lawyerphoto: {
    height: "19rem",
  },

  lawyericons: {
    display: "flex",
    justifyContent: "center",
  },

  lawyericon: {
    color: "white",
  },
}));

const Legal = () => {
  const classes = useStyles();
  const theme = useTheme();
  const MQlg = useMediaQuery(theme.breakpoints.down("lg")); //1280px
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //960px
  const MQsm = useMediaQuery(theme.breakpoints.down("sm")); //600px

  return (
    <Box className={classes.legal}>
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
        • Legal Department •
      </Typography>
      <Typography
        className={classes.header2}
        variant={MQmd ? "h3" : MQlg ? "h2" : "h4"}
        align="center"
        gutterBottom={MQsm ? "false" : "true"}
        component={motion.div}
        variants={lefttoRightVariants}
        initial="hidden"
        animate="visible"
      >
        Legal Insight Business Instinct.
      </Typography>
      <Grid
        container
        spacing={4}
        xs={12}
        style={{ marginTop: "0.1rem" }}
        direction={MQsm ? "column" : "row"}
        justifyContent={MQsm ? "center" : "flex-start"}
        alignItems={MQsm ? "center" : "flex-start"}
        component={motion.div}
        variants={lefttoRightVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid item md={1} sm={1} />
        <Grid item md={7} sm={10} style={{ textAlign: "center" }}>
          <Typography
            variant={MQmd ? "h5" : MQlg ? "h4" : "h6"}
            align="center"
            gutterBottom
            className={classes.lawyerheader}
          >
            Changing the way law firms do business
          </Typography>
          <Typography
            variant={MQmd ? "subtitle2" : MQlg ? "subtitle1" : "body2"}
            align="justify"
            paragraph
            className={classes.lawyerparag}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            soluta beatae, laudantium non ipsum cum tempore ab doloribus
            corrupti laborum nobis? Soluta consequatur nostrum laborum optio
            delectus amet, consectetur adipisicing elit. Laboriosam quisquam,
            doloremque distipsum dolor, sit ipisicing elit. Dolores se quisquam
            omnis optio dolor quas libero veritatis nulla at laudantium quae
            voluptas adipisci incidunt delectus modi illo aliquid! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Illo, voluptates animi.
            Obcaecati iure placeat ipsa? Voluptatum eos vel illo eum assumenda
            itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            doloremque cumque omnis deserunt deleniti! Mollitia praesentium
            exercitationem esse autem officia
          </Typography>
          <Button variant="contained" color="secondary">
            Submit your case
          </Button>
        </Grid>
        <Grid item md={3} sm={12}>
          <img src={lawyerImage} alt="lawyer" className={classes.lawyerphoto} />
          <Box className={classes.lawyericons}>
            <IconButton>
              <TwitterIcon
                fontSize={MQmd ? "medium" : MQlg ? "large" : "medium"}
                className={classes.lawyericon}
              />
            </IconButton>
            <IconButton>
              <LinkedInIcon
                fontSize={MQmd ? "medium" : MQlg ? "large" : "medium"}
                className={classes.lawyericon}
              />
            </IconButton>
          </Box>
          <Typography variant="h5" align="center" style={{ color: "white" }}>
            Johnathan Taylor
          </Typography>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Box>
  );
};

export default Legal;
