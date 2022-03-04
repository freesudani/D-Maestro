import React from "react";
import {
  Box,
  makeStyles,
  Typography,
  Avatar,
  Grid,
  Button,
} from "@material-ui/core";
import brokerImage from "../images/ruben-sukatendel-VsPGJqafmTk-unsplash.jpg";
import personimage from "../images/17.jpg";
import FormatQuoteSharpIcon from "@material-ui/icons/FormatQuoteSharp";

const useStyles = makeStyles((theme) => ({
  broker: {
    paddingTop: "6rem",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    height: "135vh",
    background: theme.palette.primary.dark,
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
    width: "75rem",
    height: "35rem",
    marginLeft: "1.5rem",
    filter: "brightness(40%)",
  },

  abroker: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    top: "7rem",
    left: "15.5rem",
    width: "60vw",
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
  },

  brokername: {
    margin: "1rem auto",
  },

  brokerbt: {
    margin: "1rem auto",
  },

  brokertyp: {
    fontStyle: "italic",
    color: "white",
    width: "30rem",
  },
}));

const Broker = () => {
  const classes = useStyles();

  return (
    <Box className={classes.broker}>
      <Typography
        className={classes.header}
        variant="h6"
        align="center"
        color="red"
        gutterBottom
      >
        • Brokers Department •
      </Typography>
      <Typography
        className={classes.header2}
        variant="h2"
        align="center"
        gutterBottom
      >
        More than just stock broking.
      </Typography>
      <Box className={classes.brokerpic}>
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
            variant="h6"
            align="justify"
            className={classes.brokertyp}
          >
            <FormatQuoteSharpIcon fontSize="large" /> Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Reprehenderit consequuntur autem
            voluptatum porro exercitationem delectus qui iste sed impedit,
            eveniet odio? Illo tenetur quia ad ut, commodi fuga at id. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Deserunt optio
            iste quia quasi, numquam maxime at eaque consequuntur nesciunt,
            omnis saepe voluptatem blanditiis labore laborum quam perferendis
            nam illum eum.
            <FormatQuoteSharpIcon fontSize="large" />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Broker;
