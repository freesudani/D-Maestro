import { withStyles } from "@material-ui/core/styles";
import { Menu, MenuItem } from "@material-ui/core";

export const StyledMenu = withStyles({
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

export const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
