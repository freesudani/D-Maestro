import React from "react";
import {
  Box,
  makeStyles,
  Typography,
  Button,
  Grid,
  IconButton,
} from "@material-ui/core";
import lawyerImage from "../images/pamela-buenrostro-3Vdf7wIJ7ds-unsplash.jpg";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  legal: {
    paddingTop: "6rem",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    height: "115vh",
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

  return (
    <Box className={classes.legal}>
      <Typography
        className={classes.header}
        variant="h6"
        align="center"
        color="red"
        gutterBottom
      >
        • Legal Department •
      </Typography>
      <Typography
        className={classes.header2}
        variant="h2"
        align="center"
        gutterBottom
      >
        Legal Insight Business Instinct.
      </Typography>
      <Grid container spacing={4} style={{ marginTop: "2rem" }}>
        <Grid item xs={1} />
        <Grid item xs={7}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            className={classes.lawyerheader}
          >
            Changing the way law firms do business
          </Typography>
          <Typography
            variant="subtitle1"
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
        <Grid item xs={3}>
          <img src={lawyerImage} alt="lawyer" className={classes.lawyerphoto} />
          <Box className={classes.lawyericons}>
            <IconButton>
              <TwitterIcon fontSize="large" className={classes.lawyericon} />
            </IconButton>
            <IconButton>
              <LinkedInIcon fontSize="large" className={classes.lawyericon} />
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
