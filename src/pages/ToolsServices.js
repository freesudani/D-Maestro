import React from "react";
import tsImage1 from "../images/pexels-burak-kebapci-186461.jpg";
import tsImage2 from "../images/pexels-david-mcbee-730547.jpg";
import tsImage3 from "../images/pexels-pixabay-534216.jpg";
import {
  makeStyles,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import StarRateIcon from "@material-ui/icons/StarRate";

const useStyles = makeStyles((theme) => ({
  tools: {
    paddingTop: "6rem",
    background: theme.palette.primary.dark,
    height: "100vh",
  },
  header: {
    color: theme.palette.error.dark,
    textTransform: "uppercase",
  },
  header2: {
    color: "white",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  header3: {
    color: "white",
  },
  cards: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "2rem",
    position: "relative",
  },
  popular: {
    position: "absolute",
    top: "0.6rem",
    padding: "0rem 0.5rem",
    background: "-webkit-linear-gradient(top left, #ff4081 20%, #f50057 90%)",
  },
  root: {
    height: "16rem",
    maxWidth: 300,
    background: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  media: {
    height: 120,
    width: 120,
    borderRadius: "50%",
    marginLeft: "28%",
    marginTop: "0.8rem",
  },
  cardsheader: {
    color: "white",
    textAlign: "center",
  },
  cardicon: {
    color: theme.palette.secondary.main,
  },
  cardlists: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  },
  cardlist: {
    color: "white",
    marginLeft: "-1.8rem",
    marginBottom: "-0.5rem",
  },
}));

const ToolsServices = () => {
  const classes = useStyles();

  return (
    <div className={classes.tools}>
      <Typography
        className={classes.header}
        variant="h6"
        align="center"
        color="red"
        gutterBottom
      >
        • tools & services •
      </Typography>
      <Typography
        className={classes.header2}
        variant="h2"
        align="center"
        gutterBottom
      >
        stake pool
        <br /> deployment plateform
      </Typography>
      <Typography
        className={classes.header3}
        variant="body2"
        align="center"
        gutterBottom
      >
        Enterprise-grade infrastructure & developer API to power cardano
      </Typography>
      <div className={classes.cards}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={tsImage1}
              title="Currency"
            />
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                className={classes.cardsheader}
              >
                Stake Pool
              </Typography>
              <List
                component="ul"
                aria-label="main mailbox folders"
                disablePadding
              >
                <ListItem className={classes.cardlists}>
                  <ListItemIcon>
                    <StarRateIcon className={classes.cardicon} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Deployment & Managment"
                    className={classes.cardlist}
                  />
                </ListItem>
                <ListItem className={classes.cardlists}>
                  <ListItemIcon>
                    <StarRateIcon className={classes.cardicon} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Performance dashboard"
                    className={classes.cardlist}
                  />
                </ListItem>
              </List>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root} style={{ background: "#3f51b5" }}>
          <CardActionArea>
            <Typography variant="body2" className={classes.popular}>
              POPULAR
            </Typography>
            <CardMedia
              className={classes.media}
              image={tsImage2}
              title="Currency"
            />
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                className={classes.cardsheader}
              >
                ISPO
              </Typography>
              <List
                component="ul"
                aria-label="main mailbox folders"
                disablePadding
              >
                <ListItem className={classes.cardlists}>
                  <ListItemIcon>
                    <StarRateIcon className={classes.cardicon} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Deployment & Managment"
                    className={classes.cardlist}
                  />
                </ListItem>
                <ListItem className={classes.cardlists}>
                  <ListItemIcon>
                    <StarRateIcon className={classes.cardicon} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Performance dashboard"
                    className={classes.cardlist}
                  />
                </ListItem>
              </List>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={tsImage3}
              title="Currency"
            />
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                className={classes.cardsheader}
              >
                Cardano Node
              </Typography>
              <List
                component="ul"
                aria-label="main mailbox folders"
                disablePadding
              >
                <ListItem className={classes.cardlists}>
                  <ListItemIcon>
                    <StarRateIcon className={classes.cardicon} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Deployment & Managment"
                    className={classes.cardlist}
                  />
                </ListItem>
                <ListItem className={classes.cardlists}>
                  <ListItemIcon>
                    <StarRateIcon className={classes.cardicon} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Performance dashboard"
                    className={classes.cardlist}
                  />
                </ListItem>
              </List>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default ToolsServices;