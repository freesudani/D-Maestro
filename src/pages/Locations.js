import React, { useState } from "react";
import {
  Box,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
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
    height: "190vh",
    background: theme.palette.primary.dark,
  },

  selectbranch: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "5px",
    margin: "auto 32rem",
    background: "white",
  },

  formControl: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(1.5),
    width: 200,
    color: "white",
  },
}));

const Locations = () => {
  /*  const [state, setState] = useState({
    location: "",
    name: "hai",
  }); */

  const [value, setValue] = useState("10");

  const classes = useStyles();

  /* const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  }; */

  return (
    <Box className={classes.location}>
      <Box className={classes.selectbranch}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="branch">Branch Name</InputLabel>
          <Select
            native
            value={value}
            onChange={(event) => setValue(event.target.value)}
          >
            <option aria-label="None" value="" />
            <option value={"10"}>North</option>
            <option value={"20"}>East</option>
            <option value={"30"}>West</option>
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
