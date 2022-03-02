import React, { useEffect, useContext } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { DataContext } from "../store/index-context";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  index: {
    paddingTop: "6rem",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    height: "100vh",
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

  useEffect(() => {
    ctx.getrate();
  }, []);

  return (
    <Box className={classes.index}>
      <Typography
        className={classes.header}
        variant="h6"
        align="center"
        color="red"
        gutterBottom
      >
        • Crypto Index •
      </Typography>
      <Typography
        className={classes.header2}
        variant="h2"
        align="center"
        gutterBottom
      >
        Currect Cypto Trend
      </Typography>
      <Typography
        className={classes.header3}
        variant="body2"
        align="center"
        gutterBottom
      >
        Live Crypto Prices
      </Typography>

      <Box className={classes.root}>
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
