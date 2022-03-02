import React, { useState } from "react";

export const DataContext = React.createContext({
  data: [],
  iL: false,
  getrate: async () => {},
});

const DataContextProvider = (props) => {
  const [cryptodata, setCryptoData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(
      "http://api.coinlayer.com/live?access_key=a36ab9d64ec2ece017ebc293439e9103"
    );
    const data = await response.json();
    console.log(data);
    const alltheRates = {
      ABC: data.rates.ABC,
      ACP: data.rates.ACP,
      AE: data.rates.AE,
    };

    console.log(alltheRates);
    setCryptoData(alltheRates);
    setIsLoading(false);
  };

  const contextValue = {
    data: cryptodata,
    iL: isLoading,
    getrate: fetchData,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
