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
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topleft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
  topright: {
    display: "flex",
    width: "50vw",
  },
  statistics: {
    marginLeft: "7rem",
    width: "7.5rem",
  },
  statistic: {
    color: "white",
  },
  statisticdesc: {
    color: "#9575cd",
    fontWeight: "bold",
    textAlign: "right",
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
  },
  root: {
    position: "relative",
    height: "15rem",
    maxWidth: 275,
    background: theme.palette.primary.main,
  },
  cardicon: {
    color: "white",
    position: "absolute",
    right: "1rem",
    top: "1rem",
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
  },

  cardbottomleft: {
    display: "flex",
    alignItems: "center",
  },

  bottomstats2: { color: "#9575cd", fontWeight: "bold" },
  cardbottomRight: {
    background: "black",
    borderRadius: "5px",
    padding: "0.2rem .4rem",
  },
}));

function Marketplace() {
  const classes = useStyles();
  return (
    <Box className={classes.market}>
      <Box className={classes.top}>
        <Box className={classes.topleft}>
          <Typography
            className={classes.header}
            variant="h6"
            align="center"
            color="red"
            gutterBottom
          >
            • marketplace •
          </Typography>
          <Typography
            className={classes.header2}
            variant="h2"
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
        <Box className={classes.topright}>
          <Box className={classes.statistics}>
            <Typography
              variant="h6"
              align="right"
              gutterBottom
              className={classes.statistic}
            >
              12
            </Typography>
            <Typography
              variant="body1"
              align="right"
              className={classes.statisticdesc}
            >
              Active ISPO
            </Typography>
          </Box>
          <Box className={classes.statistics}>
            <Typography
              variant="h6"
              align="right"
              gutterBottom
              className={classes.statistic}
            >
              $345,679,901
            </Typography>
            <Typography
              variant="body1"
              align="right"
              className={classes.statisticdesc}
            >
              Total STaked
            </Typography>
          </Box>
          <Box className={classes.statistics}>
            <Typography
              variant="h6"
              align="right"
              gutterBottom
              className={classes.statistic}
            >
              25,345
            </Typography>
            <Typography
              variant="body1"
              align="right"
              className={classes.statisticdesc}
            >
              Participants
            </Typography>
          </Box>
        </Box>
      </Box>
      <Grid container spacing={5} xs={12} className={classes.cards}>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <Box className={classes.cardicon}>
                <Typography variant="h6">Maestro</Typography>
              </Box>
              <CardMedia
                className={classes.media}
                image={mpImage1}
                title="Currency"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.cardsheader}
                >
                  MELD
                </Typography>
                <Typography
                  className={classes.cardheader2}
                  variant="body2"
                  align="left"
                  gutterBottom
                >
                  Lend & borrow for crypto and flat
                </Typography>
                <Box className={classes.cardbottom}>
                  <Box className={classes.cardbottomleft}>
                    <Typography variant="h6" align="right">
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
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <Box className={classes.cardicon}>
                <Typography variant="h6">Maestro</Typography>
              </Box>
              <CardMedia
                className={classes.media}
                image={mpImage2}
                title="Currency"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.cardsheader}
                >
                  MELD
                </Typography>
                <Typography
                  className={classes.cardheader2}
                  variant="body2"
                  align="left"
                  gutterBottom
                >
                  Lend & borrow for crypto and flat
                </Typography>
                <Box className={classes.cardbottom}>
                  <Box className={classes.cardbottomleft}>
                    <Typography variant="h6" align="right">
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
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <Box className={classes.cardicon}>
                <Typography variant="h6">Maestro</Typography>
              </Box>
              <CardMedia
                className={classes.media}
                image={mpImage3}
                title="Currency"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.cardsheader}
                >
                  MELD
                </Typography>
                <Typography
                  className={classes.cardheader2}
                  variant="body2"
                  align="left"
                  gutterBottom
                >
                  Lend & borrow for crypto and flat
                </Typography>
                <Box className={classes.cardbottom}>
                  <Box className={classes.cardbottomleft}>
                    <Typography variant="h6" align="right">
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
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <Box className={classes.cardicon}>
                <Typography variant="h6">Maestro</Typography>
              </Box>
              <CardMedia
                className={classes.media}
                image={mpImage4}
                title="Currency"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.cardsheader}
                >
                  MELD
                </Typography>
                <Typography
                  className={classes.cardheader2}
                  variant="body2"
                  align="left"
                  gutterBottom
                >
                  Lend & borrow for crypto and flat
                </Typography>
                <Box className={classes.cardbottom}>
                  <Box className={classes.cardbottomleft}>
                    <Typography variant="h6" align="right">
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
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <Box className={classes.cardicon}>
                <Typography variant="h6">Maestro</Typography>
              </Box>
              <CardMedia
                className={classes.media}
                image={mpImage5}
                title="Currency"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.cardsheader}
                >
                  MELD
                </Typography>
                <Typography
                  className={classes.cardheader2}
                  variant="body2"
                  align="left"
                  gutterBottom
                >
                  Lend & borrow for crypto and flat
                </Typography>
                <Box className={classes.cardbottom}>
                  <Box className={classes.cardbottomleft}>
                    <Typography variant="h6" align="right">
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
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <Box className={classes.cardicon}>
                <Typography variant="h6">Maestro</Typography>
              </Box>
              <CardMedia
                className={classes.media}
                image={mpImage6}
                title="Currency"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.cardsheader}
                >
                  MELD
                </Typography>
                <Typography
                  className={classes.cardheader2}
                  variant="body2"
                  align="left"
                  gutterBottom
                >
                  Lend & borrow for crypto and flat
                </Typography>
                <Box className={classes.cardbottom}>
                  <Box className={classes.cardbottomleft}>
                    <Typography variant="h6" align="right">
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
