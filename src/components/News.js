import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { useTheme, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  news: {
    padding: "0.8rem",
    marginBottom: "0.5rem",
    borderBottom: "1px solid #fff",
    [theme.breakpoints.down("md")]: {
      padding: "0.5rem",
    },
  },
  date: {
    textAlign: "left",
  },
  newshead: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "start",
  },
  image: {
    width: "15rem",
    height: "10rem",
    marginRight: "0.2rem",
    [theme.breakpoints.down("md")]: {
      width: "10rem",
      height: "8rem",
      marginRight: "0.1rem",
    },
  },
  title: {
    textAlign: "left",
  },
  details: {
    textAlign: "justify",
    margin: "0.2rem auto",
  },
  divider: {
    margin: "0.5rem auto",
    zIndex: "1",
  },
}));

const News = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const MQmd = useMediaQuery(theme.breakpoints.down("md"));

  return props.article.map((artc, index) => {
    return (
      <Box className={classes.news} key={index}>
        <Typography variant="body2" className={classes.date}>
          {artc.Date}
        </Typography>
        <Box className={classes.newshead}>
          <img src={artc.image} alt={artc.title} className={classes.image} />
          <Typography
            variant={MQmd ? "body1" : "caption"}
            className={classes.title}
          >
            {artc.title}
          </Typography>
        </Box>
        <Typography variant="caption" className={classes.details}>
          {artc.content}
        </Typography>
      </Box>
    );
  });
};

export default News;
