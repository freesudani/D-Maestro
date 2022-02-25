import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
  const classes = useStyles();
  return (
    <Box className={classes.icons}>
      <TwitterIcon className={classes.icon} />
      <EmailIcon className={classes.icon} />
      <LinkedInIcon className={classes.icon} />
    </Box>
  );
};

export default IconsMenu;
