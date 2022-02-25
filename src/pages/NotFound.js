import React from "react";
import { makeStyles, Button, Typography, Box } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  notfound: {
    paddingTop: "10rem",
    background: theme.palette.primary.dark,
    height: "100vh",
    textAlign: "center",
  },
  header: {
    color: theme.palette.error.main,
  },
  goback: {
    marginTop: "3rem",
    color: theme.palette.error.main,
  },
}));

const NotFound = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Box className={classes.notfound}>
      <Typography variant="h1" gutterBottom className={classes.header}>
        404 page not found
      </Typography>
      <Typography variant="h5" gutterBottom className={classes.header}>
        We are sorry but the page you are looking for does not exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/welcome")}
        className={classes.goback}
      >
        Go Back to Home Page
      </Button>
    </Box>
  );
};

export default NotFound;
