import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  dropmenu: {
    display: "flex",
    marginRight: "5rem",
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(false);
  const [anchorE2, setAnchorE2] = useState(false);
  const [anchorE3, setAnchorE3] = useState(false);

  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl(false);
  };

  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorE2(false);
  };

  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorE3(false);
  };

  const classes = useStyles();

  return (
    <div className={classes.dropmenu}>
      <div>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={handleClick1}
          disableElevation
        >
          Products
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={anchorEl}
          onClose={handleClose1}
        >
          <StyledMenuItem>
            <ListItemText primary="Marketplace" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText primary="Tools & Services" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText primary="Crypto index" />
          </StyledMenuItem>
        </StyledMenu>
      </div>
      <div>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={handleClick2}
          disableElevation
        >
          Team
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorE2}
          keepMounted
          open={anchorE2}
          onClose={handleClose2}
        >
          <StyledMenuItem>
            <ListItemText primary="Accounting" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText primary="Brokers" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText primary="Legal" />
          </StyledMenuItem>
        </StyledMenu>
      </div>
      <div>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={handleClick3}
          disableElevation
        >
          Contact Us
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorE3}
          keepMounted
          open={anchorE3}
          onClose={handleClose3}
        >
          <StyledMenuItem>
            <ListItemText primary="Locations" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText primary="Email Us" />
          </StyledMenuItem>
        </StyledMenu>
      </div>
    </div>
  );
};

export default DropdownMenu;
