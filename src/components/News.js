import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  news: {
    padding: "0.8rem",
    marginBottom: "0.5rem",
    borderBottom: "1px solid #fff",
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

  return props.article.map((artc, index) => {
    return (
      <Box className={classes.news} key={index}>
        <Typography variant="body2" className={classes.date}>
          {artc.Date}
        </Typography>
        <Box className={classes.newshead}>
          <img src={artc.image} alt={artc.title} className={classes.image} />
          <Typography variant="body1" className={classes.title}>
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
