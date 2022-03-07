import React, { useContext } from "react";
import { CryptoContext } from "../../store/crypto-context";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import IconsMenu from "./IconsMenu";
import DropdownMenu from "./DropdownMenu";

const useStyles = makeStyles(() => ({
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
  const cryCtx = useContext(CryptoContext);
  const classes = useStyles();

  return (
    <AppBar style={{ width: "100vw" }}>
      <Toolbar className={classes.toolbar}>
        <Box>
          <Typography
            variant="h6"
            onClick={cryCtx.homeopen}
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
