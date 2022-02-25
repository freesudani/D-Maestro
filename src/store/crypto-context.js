import React, { useState } from "react";

export const CryptoContext = React.createContext({
  El: false,
  E2: false,
  E3: false,
  click1: () => {},
  close1: (e) => {},
  click2: () => {},
  close2: (e) => {},
  click3: () => {},
  close3: (e) => {},
});

const CryptoContextProvider = (props) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const [anchorE2, setAnchorE2] = useState(false);
  const [anchorE3, setAnchorE3] = useState(false);

  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl(false);
  };

  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorE2(false);
  };

  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorE3(false);
  };

  const contextValue = {
    El: anchorEl,
    E2: anchorE2,
    E3: anchorE3,
    click1: handleClick1,
    close1: handleClose1,
    click2: handleClick2,
    close2: handleClose2,
    click3: handleClick3,
    close3: handleClose3,
  };

  return (
    <CryptoContext.Provider value={contextValue}>
      {props.children}
    </CryptoContext.Provider>
  );
};

export default CryptoContextProvider;
