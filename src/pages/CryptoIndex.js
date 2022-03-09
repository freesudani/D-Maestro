import React, { useEffect, useContext } from "react";
import { Box, makeStyles, Typography, Paper, Grid } from "@material-ui/core";
import { DataContext } from "../store/index-context";
import { motion } from "framer-motion";
import { downtoUpVariants, smalltoBigVariants } from "../animations/animations";
import { useTheme, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  index: {
    paddingTop: "6rem",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    height: "100vh",
    background: theme.palette.primary.dark,
    [theme.breakpoints.down("md")]: {
      height: "90vh",
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

  header3: {
    color: "white",
  },

  root: {
    flexGrow: 1,
    marginTop: "3rem",
  },

  cryptoindex: {
    display: "flex",
    justifyContent: "center",
  },

  secondgrid: {},

  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    backgroundColor: theme.palette.error.dark,
    color: "white",
    fontWeight: "bold",
  },

  paper1: {
    padding: theme.spacing(2),
    textAlign: "center",
    marginTop: "1.2rem",
  },
}));

const CryptoIndex = () => {
  const ctx = useContext(DataContext);
  const classes = useStyles();
  const theme = useTheme();
  const MQlg = useMediaQuery(theme.breakpoints.down("lg")); //1280px
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //960px

  useEffect(() => {
    ctx.getrate();
  }, [ctx]);

  return (
    <Box className={classes.index}>
      <Typography
        className={classes.header}
        variant={MQmd ? "subtitle1" : MQlg ? "h6" : "subtitle2"}
        align="center"
        color="red"
        gutterBottom
        component={motion.div}
        variants={smalltoBigVariants}
        initial="hidden"
        animate="visible"
      >
        • Crypto Index •
      </Typography>
      <Typography
        className={classes.header2}
        variant={MQmd ? "h3" : MQlg ? "h2" : "h4"}
        align="center"
        gutterBottom
        component={motion.div}
        variants={smalltoBigVariants}
        initial="hidden"
        animate="visible"
      >
        Currect Cypto Trend
      </Typography>
      <Typography
        className={classes.header3}
        variant="body2"
        align="center"
        gutterBottom
        component={motion.div}
        variants={smalltoBigVariants}
        initial="hidden"
        animate="visible"
      >
        Live Crypto Prices
      </Typography>

      <Box
        className={classes.root}
        component={motion.div}
        variants={downtoUpVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={10}>
          <Grid item xs={4} className={classes.cryptoindex}>
            <Paper>
              <Typography variant="h4" className={classes.paper}>
                ABC
              </Typography>
            </Paper>
            <Paper>
              <Typography variant="h5" className={classes.paper1}>
                {ctx.data.ABC}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4} className={classes.cryptoindex}>
            <Paper>
              <Typography variant="h4" bold className={classes.paper}>
                ACP
              </Typography>
            </Paper>
            <Paper>
              <Typography variant="h5" className={classes.paper1}>
                {ctx.data.ACP}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4} className={classes.cryptoindex}>
            <Paper>
              <Typography variant="h4" className={classes.paper}>
                AE
              </Typography>
            </Paper>
            <Paper>
              <Typography variant="h5" className={classes.paper1}>
                {ctx.data.AE}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CryptoIndex;
