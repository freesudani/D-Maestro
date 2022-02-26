import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import FlareIcon from "@material-ui/icons/Flare";
import Iconsvg from "../images/2844382_ada_cardano_icon.svg";
import News from "../components/News";
import { Oval } from "react-loader-spinner";
import dateFormat from "dateformat";

const useStyles = makeStyles((theme) => ({
  home: {
    display: "flex",
    paddingTop: "8rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.primary.dark,
    color: "white",
  },
  text: {
    textTransform: "capitalize",
    fontWeight: "bold",
  },

  textspan: {
    color: theme.palette.secondary.main,
  },

  textspan1: {
    background: "-webkit-linear-gradient(top left, #ff4081 20%, #f50057 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  ispos: { display: "flex", marginTop: "2rem" },
  ispo: {
    display: "flex",
    marginRight: "3.5rem",
  },
  flare: {
    marginRight: "0.5rem",
  },

  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginTop: "2.5rem",
  },

  button: {
    borderTopLeftRadius: "0px",
    borderBottomRightRadius: "0px",
    borderTopRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    color: "white",
    width: "10rem",
    height: "3rem",
  },

  cardanoicon: {
    width: "2rem",
  },

  cardano: {
    display: "flex",
    alignItems: "center",
  },

  cardanobutton: {
    color: "white",
  },
  news: {
    height: "80%",
    background: "rgba(0, 0, 0, 0.85)",
    borderRadius: "8px",
    border: "1px solid #fff",
    overflow: "scroll",
    overflowX: "hidden",
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "7.5rem",
  },
}));

const Home = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();

  const fetchNews = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=93d4bda17f5e4e0282e0b4dfc5195a05"
    );
    const data = await response.json();
    console.log(data);
    const newsArticles = data.articles.map((article) => {
      const publishedDate = article.date;
      return {
        id: article.id,
        title: article.title,
        image: article.urlToImage,
        author: article.author,
        content: article.content,
        Date: dateFormat(publishedDate, "mmmm dS, yyyy"),
      };
    });
    console.log(newsArticles);
    setArticle(newsArticles);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Box className={classes.home}>
      <Grid item xs={7}>
        <Typography variant="h2" className={classes.text} gutterBottom>
          pioneering
          <br /> the future of{" "}
          <Box component="span" m={1} className={classes.textspan}>
            Crypto
            <br />
          </Box>
          <Box component="span" m={1} className={classes.textspan1}>
            Crowdfunding
          </Box>
        </Typography>
        <Box className={classes.ispos}>
          <Box className={classes.ispo}>
            <FlareIcon className={classes.flare} />
            <Typography gutterBottom>Wolrd's 1st ISPO platform</Typography>
          </Box>
          <Box className={classes.ispo}>
            <FlareIcon className={classes.flare} />
            <Typography gutterBottom>
              Discover, invest and launch ISPOs
            </Typography>
          </Box>
        </Box>
        <Box className={classes.buttons}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.button}
          >
            Explore
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            className={classes.button}
          >
            Create
          </Button>
          <Box className={classes.cardano}>
            <img src={Iconsvg} alt="icon" className={classes.cardanoicon} />
            <Button size="large" className={classes.cardanobutton}>
              Built on Cardano
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={5} className={classes.news}>
        {isLoading ? (
          <Box className={classes.loader}>
            <Oval
              height={160}
              width={160}
              color="#3f51b5"
              secondaryColor="#fff"
            />
          </Box>
        ) : (
          <News article={article} />
        )}
      </Grid>
    </Box>
  );
};

export default Home;
