import React from "react";
import CryptoContextProvider from "./crypto-context";
import NewsContextProvider from "./news-context";
import DataContextProvider from "./index-context";

const AllContextProviders = (props) => {
  return (
    <>
      <CryptoContextProvider>
        <NewsContextProvider>
          <DataContextProvider>{props.children}</DataContextProvider>
        </NewsContextProvider>
      </CryptoContextProvider>
    </>
  );
};

export default AllContextProviders;
