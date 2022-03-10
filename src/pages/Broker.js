import React from "react";
import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import FormatQuoteSharpIcon from "@material-ui/icons/FormatQuoteSharp";
import { motion } from "framer-motion";
import { lefttoRightVariants } from "../animations/animations";
import { useTheme, useMediaQuery } from "@material-ui/core";
import brokerImage from "../images/ruben-sukatendel-VsPGJqafmTk-unsplash.jpg";
import personimage from "../images/17.jpg";

const useStyles = makeStyles((theme) => ({
  broker: {
    paddingTop: "6rem",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    height: "120vh",
    background: theme.palette.primary.dark,
    [theme.breakpoints.down("md")]: {
      height: "110vh",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0",
      paddingRight: "0",
      height: "137vh",
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
  brokerpic: {
    position: "relative",
  },
  image: {
    width: "65rem",
    height: "30rem",
    marginLeft: "7rem",
    filter: "brightness(40%)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: "0",
    },
  },

  abroker: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    top: "7rem",
    left: "15.5rem",
    width: "60vw",
    [theme.breakpoints.down("sm")]: {
      top: "0.2rem",
      left: "0rem",
      width: "100%",
      flexDirection: "column",
    },
  },

  brokerinfo: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    color: "white",
  },

  brokprofilepic: {
    borderRadius: "50%",
    marginTop: "0.9rem",
    [theme.breakpoints.down("sm")]: {
      width: "8rem",
      alignSelf: "center",
    },
  },

  brokername: {
    margin: "1rem auto",
    [theme.breakpoints.down("sm")]: {
      margin: "0.3rem auto",
    },
  },

  brokerbt: {
    margin: "1rem auto",
    [theme.breakpoints.down("sm")]: {
      margin: "0.7rem auto",
    },
  },

  brokertyp: {
    fontStyle: "italic",
    color: "white",
    width: "30rem",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      alignSelf: "center",
      paddingTop: "0.4rem",
    },
  },
}));

const Broker = () => {
  const classes = useStyles();
  const theme = useTheme();
  const MQlg = useMediaQuery(theme.breakpoints.down("lg")); //1280px
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //960px
  const MQsm = useMediaQuery(theme.breakpoints.down("sm")); //600px

  return (
    <Box className={classes.broker}>
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
        • Brokers Department •
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
        More than just stock broking.
      </Typography>
      <Box
        className={classes.brokerpic}
        component={motion.div}
        variants={lefttoRightVariants}
        initial="hidden"
        animate="visible"
      >
        <img src={brokerImage} alt="broker" className={classes.image} />
        <Box className={classes.abroker}>
          <Box className={classes.brokerinfo}>
            <img
              src={personimage}
              alt="a broker"
              className={classes.brokprofilepic}
            />
            <Typography
              variant="h6"
              align="center"
              className={classes.brokername}
            >
              Nelson Reyes
            </Typography>
            <Typography variant="body2">Chief Ecxutive broker</Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.brokerbt}
            >
              Contact us
            </Button>
          </Box>
          <Typography
            variant={MQsm ? "subtitle1" : "h6"}
            align="justify"
            className={classes.brokertyp}
          >
            <FormatQuoteSharpIcon fontSize={MQsm ? "small" : "large"} /> Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
            consequuntur autem voluptatum porro exercitationem delectus qui iste
            sed impedit, eveniet odio? Illo tenetur quia ad ut, commodi fuga at
            id. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Deserunt optio iste quia quasi, numquam maxime at eaque consequuntur
            nesciunt, omnis saepe voluptatem blanditiis labore laborum quam
            perferendis nam illum eum.
            <FormatQuoteSharpIcon fontSize={MQsm ? "small" : "large"} />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Broker;
