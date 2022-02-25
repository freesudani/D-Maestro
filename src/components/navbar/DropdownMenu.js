import React, { useContext } from "react";
import { CryptoContext } from "../../store/crypto-context";
import { makeStyles, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  dropmenu: {
    display: "flex",
    marginRight: "5rem",
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #7986cb",
    background: "#7986cb",
    padding: "0.5rem",
    borderRadius: "5px",
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
  const cryCtx = useContext(CryptoContext);
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Box className={classes.dropmenu}>
      <Box>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={cryCtx.click1}
          disableElevation
        >
          Products
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={cryCtx.El}
          keepMounted
          open={cryCtx.El}
          onClose={cryCtx.close1}
        >
          <StyledMenuItem>
            <ListItemText
              primary="Marketplace"
              onClick={() => navigate("/marketplace")}
            />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText
              primary="Tools & Services"
              onClick={() => navigate("/tools")}
            />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText
              primary="Crypto index"
              onClick={() => navigate("/index")}
            />
          </StyledMenuItem>
        </StyledMenu>
      </Box>
      <Box>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={cryCtx.click2}
          disableElevation
        >
          Team
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={cryCtx.E2}
          keepMounted
          open={cryCtx.E2}
          onClose={cryCtx.close2}
        >
          <StyledMenuItem>
            <ListItemText
              primary="Accounting"
              onClick={() => navigate("/accounting")}
            />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText
              primary="Broker"
              onClick={() => navigate("/broker")}
            />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText primary="Legal" onClick={() => navigate("/legal")} />
          </StyledMenuItem>
        </StyledMenu>
      </Box>
      <Box>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={cryCtx.click3}
          disableElevation
        >
          Contact Us
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={cryCtx.E3}
          keepMounted
          open={cryCtx.E3}
          onClose={cryCtx.close3}
        >
          <StyledMenuItem>
            <ListItemText
              primary="Branch Locations"
              onClick={() => navigate("/locations")}
            />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText
              primary="Social Media"
              onClick={() => navigate("/socials")}
            />
          </StyledMenuItem>
        </StyledMenu>
      </Box>
    </Box>
  );
};

export default DropdownMenu;
