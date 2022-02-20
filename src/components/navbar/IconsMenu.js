import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icons: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: "1.5rem",
  },
}));

const IconsMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.icons}>
      <TwitterIcon className={classes.icon} />
      <EmailIcon className={classes.icon} />
      <LinkedInIcon className={classes.icon} />
    </div>
  );
};

export default IconsMenu;
