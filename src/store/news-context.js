import React, { useState } from "react";
import dateFormat from "dateformat";

export const NewsContext = React.createContext({
  art: [],
  iL: false,
  getnews: async () => {},
});

const NewsContextProvider = (props) => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    setArticle(newsArticles);
    setIsLoading(false);
  };

  const contextValue = {
    art: article,
    iL: isLoading,
    getnews: fetchNews,
  };

  return (
    <NewsContext.Provider value={contextValue}>
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;
