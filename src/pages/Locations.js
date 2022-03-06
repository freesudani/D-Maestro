import React, { useState } from "react";
import {
  Box,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@material-ui/core";

import NorthBranch from "../components/branches/NorthBranch";
import EastBranch from "../components/branches/EastBranch";
import WestBranch from "../components/branches/WestBranch";

const useStyles = makeStyles((theme) => ({
  location: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "6rem",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    height: "205vh",
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

  selectbranch: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  formControl: {
    width: 200,
  },

  inputlabel: {
    color: "white",
  },
  inputlabel2: {
    color: "black",
  },
}));

const Locations = () => {
  const [value, setValue] = useState("10");

  const classes = useStyles();

  return (
    <Box className={classes.location}>
      <Typography
        className={classes.header}
        variant="h6"
        align="center"
        color="red"
        gutterBottom
      >
        • Branches •
      </Typography>
      <Typography
        className={classes.header2}
        variant="h2"
        align="center"
        gutterBottom
      >
        We welcome you
      </Typography>
      <Box className={classes.selectbranch}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="branch" className={classes.inputlabel}>
            Select Branch Name
          </InputLabel>
          <Select
            native
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className={classes.inputlabel}
          >
            <option value={"10"} className={classes.inputlabel2}>
              North
            </option>
            <option value={"20"} className={classes.inputlabel2}>
              East
            </option>
            <option value={"30"} className={classes.inputlabel2}>
              West
            </option>
          </Select>
        </FormControl>
      </Box>
      {value === "10" && <NorthBranch />}
      {value === "20" && <EastBranch />}
      {value === "30" && <WestBranch />}
    </Box>
  );
};

export default Locations;