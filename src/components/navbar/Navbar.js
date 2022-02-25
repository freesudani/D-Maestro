import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles, Box } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import IconsMenu from "./IconsMenu";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    position: "sticky",
    display: "flex",
    justifyContent: "space-between",
  },
  submenu: {
    display: "flex",
    justifyContent: "space-around",
  },
  logo: {
    cursor: "pointer",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Box>
          <Typography
            variant="h6"
            onClick={() => navigate("/welcome")}
            className={classes.logo}
          >
            Maestro
          </Typography>
        </Box>
        <Box className={classes.submenu}>
          <DropdownMenu />
          <IconsMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
