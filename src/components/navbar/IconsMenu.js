import React, { useContext } from "react";
import { CryptoContext } from "../../store/crypto-context";
import { makeStyles, Box } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles(() => ({
  icons: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: "1.5rem",
    cursor: "pointer",
  },
}));

const IconsMenu = () => {
  const cryCtx = useContext(CryptoContext);
  const classes = useStyles();

  return (
    <Box className={classes.icons}>
      <TwitterIcon className={classes.icon} onClick={cryCtx.twopen} />
      <EmailIcon className={classes.icon} onClick={cryCtx.emopen} />
      <LinkedInIcon className={classes.icon} onClick={cryCtx.ldopen} />
    </Box>
  );
};

export default IconsMenu;
