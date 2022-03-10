import React from "react";
import {
  makeStyles,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
  Grid,
} from "@material-ui/core";
import { motion } from "framer-motion";
import {
  lefttoRightVariants,
  righttoLeftVariants,
  smalltoBigVariants,
} from "../animations/animations";
import { useTheme, useMediaQuery } from "@material-ui/core";

import mpImage1 from "../images/pexels-fiona-art-4725323.jpg";
import mpImage2 from "../images/pexels-fiona-art-5140444.jpg";
import mpImage3 from "../images/pexels-steve-johnson-2123666.jpg";
import mpImage4 from "../images/pexels-steve-johnson-3357919.jpg";
import mpImage5 from "../images/pexels-suzy-hazelwood-3117550.jpg";
import mpImage6 from "../images/pexels-walid-ahmad-769377.jpg";

const useStyles = makeStyles((theme) => ({
  market: {
    padding: "6rem 3rem",
    background: theme.palette.primary.dark,
    height: "135vh",
    width: "100vw",
    [theme.breakpoints.down("md")]: {
      height: "120vh",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "6rem auto 1rem",
      height: "auto",
    },
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  topleft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  topright: {
    display: "flex",
    width: "50vw",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      alignItems: "center",
      textAlign: "center",
      marginRight: "5rem",
      marginTop: "2rem",
    },
  },
  statistics: {
    marginLeft: "7rem",
    width: "7.5rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      alignItems: "center",
      textAlign: "center",
    },
  },
  statistic: {
    color: "white",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  statisticdesc: {
    color: "#9575cd",
    fontWeight: "bold",
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
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
    margin: "1rem auto auto 2rem",
    [theme.breakpoints.down("sm")]: {
      margin: "2rem auto 0.1rem",
    },
  },
  root: {
    position: "relative",
    height: "15rem",
    maxWidth: 275,
    background: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      height: "15rem",
    },
  },
  cardicon: {
    color: "white",
    position: "absolute",
    right: "1rem",
    top: "1rem",
    [theme.breakpoints.down("sm")]: {
      right: "0.5rem",
      top: "0.5rem",
    },
  },
  media: {
    height: 120,
    width: "100%",
    borderRadius: "5px",
  },
  cardsheader: {
    color: "white",
    textAlign: "left",
  },
  cardheader2: {
    color: "white",
  },
  cardbottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
    },
  },

  cardbottomleft: {
    display: "flex",
    alignItems: "center",
  },

  bottomstats2: { color: "#9575cd", fontWeight: "bold" },
  cardbottomRight: {
    background: "black",
    borderRadius: "5px",
    padding: "0.2rem 0.4rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0.1rem 0.2rem",
    },
  },
}));

function Marketplace() {
  const classes = useStyles();
  const theme = useTheme();
  const MQlg = useMediaQuery(theme.breakpoints.down("lg")); //1280px
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //960px
  const MQsm = useMediaQuery(theme.breakpoints.down("sm")); //600px

  return (
    <Box className={classes.market}>
      <Box className={classes.top}>
        <Box
          className={classes.topleft}
          component={motion.div}
          variants={lefttoRightVariants}
          initial="hidden"
          animate="visible"
        >
          <Typography
            className={classes.header}
            variant={MQmd ? "subtitle1" : MQlg ? "h6" : "subtitle2"}
            align="center"
            color="red"
            gutterBottom
          >
            • marketplace •
          </Typography>
          <Typography
            className={classes.header2}
            variant={MQmd ? "h3" : MQlg ? "h2" : "h4"}
            align="center"
            gutterBottom
          >
            Explore ISPOs
          </Typography>
          <Typography
            className={classes.header3}
            variant="body2"
            align="center"
            gutterBottom
          >
            discover top crypto projects
          </Typography>
        </Box>
        <Box
          className={classes.topright}
          component={motion.div}
          variants={righttoLeftVariants}
          initial="hidden"
          animate="visible"
        >
          <Box className={classes.statistics}>
            <Typography
              variant={MQlg ? "h6" : "subtitle1"}
              align="right"
              gutterBottom
              className={classes.statistic}
            >
              12
            </Typography>
            <Typography
              variant={MQlg ? "body1" : "body2"}
              align="right"
              className={classes.statisticdesc}
            >
              Active ISPO
            </Typography>
          </Box>
          <Box className={classes.statistics}>
            <Typography
              variant={MQlg ? "h6" : "subtitle1"}
              align="right"
              gutterBottom
              className={classes.statistic}
            >
              $345,679,901
            </Typography>
            <Typography
              variant={MQlg ? "body1" : "body2"}
              align="right"
              className={classes.statisticdesc}
            >
              Total STaked
            </Typography>
          </Box>
          <Box className={classes.statistics}>
            <Typography
              variant={MQlg ? "h6" : "subtitle1"}
              align="right"
              gutterBottom
              className={classes.statistic}
            >
              25,345
            </Typography>
            <Typography
              variant={MQlg ? "body1" : "body2"}
              align="right"
              className={classes.statisticdesc}
            >
              Participants
            </Typography>
          </Box>
        </Box>
      </Box>
      <Grid
        container
        spacing={MQsm ? 3 : 5}
        xs={12}
        className={classes.cards}
        component={motion.div}
        variants={smalltoBigVariants}
        initial="hidden"
        animate="visible"
        justifyContent="center"
      >
        <Grid item md={4} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <Box className={classes.cardicon}>
                <Typography variant={MQsm ? "subtitle1" : "h6"}>
                  Maestro
                </Typography>
              </Box>
              <CardMedia
                className={classes.media}
                image={mpImage1}
                title="Currency"
              />
              <CardContent>
                <Typography
                  variant={MQsm ? "h6" : "h5"}
                  component="h2"
                  className={classes.cardsheader}
                >
                  MELD
                </Typography>
                <Typography
                  className={classes.cardheader2}
                  variant={MQsm ? "caption" : "body2"}
                  align="left"
                  gutterBottom
                >
                  Lend & borrow for crypto and flat
                </Typography>
                <Box className={classes.cardbottom}>
                  <Box className={classes.cardbottomleft}>
                    <Typography
                      variant={MQsm ? "subtitle1" : "h6"}
                      align="right"
                    >
                      $345,679
                    </Typography>
                    <Typography
                      variant="caption"
                      align="right"
                      className={classes.bottomstats2}
                    >
                      ADA
                    </Typography>
                  </Box>
                  <Box className={classes.cardbottomRight}>
                    <Typography
                      variant="caption"
                      align="right"
                      style={{ color: "#90caf9" }}
                    >
                      Active
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={4} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <Box className={classes.cardicon}>
                <Typography variant={MQsm ? "subtitle1" : "h6"}>
                  Maestro
                </Typography>
              </Box>
              <CardMedia
                className={classes.media}
                image={mpImage2}
                title="Currency"
              />
              <CardContent>
                <Typography
                  variant={MQsm ? "h6" : "h5"}
                  component="h2"
                  className={classes.cardsheader}
                >
                  MELD
                </Typography>
                <Typography
                  className={classes.cardheader2}
                  variant={MQsm ? "caption" : "body2"}
                  align="left"
                  gutterBottom
                >
                  Lend & borrow for crypto and flat
                </Typography>
                <Box className={classes.cardbottom}>
                  <Box className={classes.cardbottomleft}>
                    <Typography
                      variant={MQsm ? "subtitle1" : "h6"}
                      align="right"
                    >
                      $345,679
                    </Typography>
                    <Typography
                      variant="caption"
                      align="right"
                      className={classes.bottomstats2}
                    >
                      ADA
                    </Typography>
                  </Box>
                  <Box className={classes.cardbottomRight}>
                    <Typography
                      variant="caption"
                      align="right"
                      style={{ color: "#1976d2" }}
                    >
                      Completed
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={4} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <Box className={classes.cardicon}>
                <Typography variant={MQsm ? "subtitle1" : "h6"}>
                  Maestro
                </Typography>
              </Box>
              <CardMedia
                className={classes.media}
                image={mpImage3}
                title="Currency"
              />
              <CardContent>
                <Typography
                  variant={MQsm ? "h6" : "h5"}
                  component="h2"
                  className={classes.cardsheader}
                >
                  MELD
                </Typography>
                <Typography
                  className={classes.cardheader2}
                  variant={MQsm ? "caption" : "body2"}
                  align="left"
                  gutterBottom
                >
                  Lend & borrow for crypto and flat
                </Typography>
                <Box className={classes.cardbottom}>
                  <Box className={classes.cardbottomleft}>
                    <Typography
                      variant={MQsm ? "subtitle1" : "h6"}
                      align="right"
                    >
                      $345,679
                    </Typography>
                    <Typography
                      variant="caption"
                      align="right"
                      className={classes.bottomstats2}
                    >
                      ADA
                    </Typography>
                  </Box>
                  <Box className={classes.cardbottomRight}>
                    <Typography
                      variant="caption"
                      align="right"
                      style={{ color: "#ff8f00" }}
                    >
                      Upcoming
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={4} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <Box className={classes.cardicon}>
                <Typography variant={MQsm ? "subtitle1" : "h6"}>
                  Maestro
                </Typography>
              </Box>
              <CardMedia
                className={classes.media}
                image={mpImage4}
                title="Currency"
              />
              <CardContent>
                <Typography
                  variant={MQsm ? "h6" : "h5"}
                  component="h2"
                  className={classes.cardsheader}
                >
                  MELD
                </Typography>
                <Typography
                  className={classes.cardheader2}
                  variant={MQsm ? "caption" : "body2"}
                  align="left"
                  gutterBottom
                >
                  Lend & borrow for crypto and flat
                </Typography>
                <Box className={classes.cardbottom}>
                  <Box className={classes.cardbottomleft}>
                    <Typography
                      variant={MQsm ? "subtitle1" : "h6"}
                      align="right"
                    >
                      $345,679
                    </Typography>
                    <Typography
                      variant="caption"
                      align="right"
                      className={classes.bottomstats2}
                    >
                      ADA
                    </Typography>
                  </Box>
                  <Box className={classes.cardbottomRight}>
                    <Typography
                      variant="caption"
                      align="right"
                      style={{ color: "#90caf9" }}
                    >
                      Active
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={4} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <Box className={classes.cardicon}>
                <Typography variant={MQsm ? "subtitle1" : "h6"}>
                  Maestro
                </Typography>
              </Box>
              <CardMedia
                className={classes.media}
                image={mpImage5}
                title="Currency"
              />
              <CardContent>
                <Typography
                  variant={MQsm ? "h6" : "h5"}
                  component="h2"
                  className={classes.cardsheader}
                >
                  MELD
                </Typography>
                <Typography
                  className={classes.cardheader2}
                  variant={MQsm ? "caption" : "body2"}
                  align="left"
                  gutterBottom
                >
                  Lend & borrow for crypto and flat
                </Typography>
                <Box className={classes.cardbottom}>
                  <Box className={classes.cardbottomleft}>
                    <Typography
                      variant={MQsm ? "subtitle1" : "h6"}
                      align="right"
                    >
                      $345,679
                    </Typography>
                    <Typography
                      variant="caption"
                      align="right"
                      className={classes.bottomstats2}
                    >
                      ADA
                    </Typography>
                  </Box>
                  <Box className={classes.cardbottomRight}>
                    <Typography
                      variant="caption"
                      align="right"
                      style={{ color: "#ff8f00" }}
                    >
                      Upcoming
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={4} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <Box className={classes.cardicon}>
                <Typography variant={MQsm ? "subtitle1" : "h6"}>
                  Maestro
                </Typography>
              </Box>
              <CardMedia
                className={classes.media}
                image={mpImage6}
                title="Currency"
              />
              <CardContent>
                <Typography
                  variant={MQsm ? "h6" : "h5"}
                  component="h2"
                  className={classes.cardsheader}
                >
                  MELD
                </Typography>
                <Typography
                  className={classes.cardheader2}
                  variant={MQsm ? "caption" : "body2"}
                  align="left"
                  gutterBottom
                >
                  Lend & borrow for crypto and flat
                </Typography>
                <Box className={classes.cardbottom}>
                  <Box className={classes.cardbottomleft}>
                    <Typography
                      variant={MQsm ? "subtitle1" : "h6"}
                      align="right"
                    >
                      $345,679
                    </Typography>
                    <Typography
                      variant="caption"
                      align="right"
                      className={classes.bottomstats2}
                    >
                      ADA
                    </Typography>
                  </Box>
                  <Box className={classes.cardbottomRight}>
                    <Typography
                      variant="caption"
                      align="right"
                      style={{ color: "#90caf9" }}
                    >
                      Active
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Marketplace;
