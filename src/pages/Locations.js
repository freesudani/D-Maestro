import React, { useState } from "react";
import {
  Box,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@material-ui/core";
import { motion } from "framer-motion";
import { smalltoBigVariants } from "../animations/animations";
import NorthBranch from "../components/branches/NorthBranch";
import EastBranch from "../components/branches/EastBranch";
import WestBranch from "../components/branches/WestBranch";
import { useTheme, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  location: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "6rem",
    height: "205vh",
    background: theme.palette.primary.dark,
    [theme.breakpoints.down("lg")]: {
      height: "190vh",
    },
    [theme.breakpoints.down("md")]: {
      height: "230vh",
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
  const [value, setValue] = useState("0");

  const classes = useStyles();
  const theme = useTheme();
  const MQlg = useMediaQuery(theme.breakpoints.down("lg")); //1280px
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //960px

  return (
    <Box className={classes.location}>
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
        • Branches •
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
        We welcome you
      </Typography>
      <Box
        className={classes.selectbranch}
        component={motion.div}
        variants={smalltoBigVariants}
        initial="hidden"
        animate="visible"
      >
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
            <option value={"0"} className={classes.inputlabel2}>
              {""}
            </option>
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
