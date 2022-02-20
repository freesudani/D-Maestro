import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import DropdownMenu from "./DropdownMenu";
import IconsMenu from "./IconsMenu";
import { theme } from "../../theme";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  submenu: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.AppBar}>
      <Toolbar className={classes.toolbar}>
        <div>
          <Typography variant="h6">Maestro</Typography>
        </div>
        <div className={classes.submenu}>
          <DropdownMenu />
          <IconsMenu />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
