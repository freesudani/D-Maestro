import React, { useContext } from "react";
import { CryptoContext } from "../../store/crypto-context";
import { Button, ListItemText, makeStyles, Box } from "@material-ui/core";
import { StyledMenu, StyledMenuItem } from "./StyledMenu";

const useStyles = makeStyles(() => ({
  dropmenu: {
    display: "flex",
    marginRight: "5rem",
  },
}));

const DropdownMenu = () => {
  const cryCtx = useContext(CryptoContext);
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
            <ListItemText primary="Marketplace" onClick={cryCtx.mpclose} />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText primary="Tools & Services" onClick={cryCtx.tsclose} />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText primary="Crypto index" onClick={cryCtx.ciclose} />
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
            <ListItemText primary="Accounting" onClick={cryCtx.aclose} />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText primary="Broker" onClick={cryCtx.bclose} />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText primary="Legal" onClick={cryCtx.lclose} />
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
            <ListItemText primary="Branch Locations" onClick={cryCtx.blclose} />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText primary="Social Media" onClick={cryCtx.smclose} />
          </StyledMenuItem>
        </StyledMenu>
      </Box>
    </Box>
  );
};

export default DropdownMenu;
