import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CryptoContext = React.createContext({
  El: false,
  E2: false,
  E3: false,
  homeopen: () => {},
  click1: () => {},
  close1: (e) => {},
  click2: () => {},
  close2: (e) => {},
  click3: () => {},
  close3: (e) => {},
  mpclose: () => {},
  tsclose: () => {},
  ciclose: () => {},
  aclose: () => {},
  bclose: () => {},
  lclose: () => {},
  blclose: () => {},
  smclose: () => {},
  twopen: () => {},
  emopen: () => {},
  ldopen: () => {},
});

const CryptoContextProvider = (props) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const [anchorE2, setAnchorE2] = useState(false);
  const [anchorE3, setAnchorE3] = useState(false);
  const navigate = useNavigate();

  const homeOpen = () => {
    navigate("/welcome");
  };

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

  const mpdropmenuClose = () => {
    navigate("/marketplace");
    setAnchorEl(false);
  };

  const tsdropmenuClose = () => {
    navigate("/tools");
    setAnchorEl(false);
  };

  const cidropmenuClose = () => {
    navigate("/index");
    setAnchorEl(false);
  };

  const acdropmenuClose = () => {
    navigate("/accounting");
    setAnchorE2(false);
  };

  const bcdropmenuClose = () => {
    navigate("/broker");
    setAnchorE2(false);
  };

  const ldropmenuClose = () => {
    navigate("/legal");
    setAnchorE2(false);
  };

  const bldropmenuClose = () => {
    navigate("/locations");
    setAnchorE3(false);
  };

  const smdropmenuClose = () => {
    navigate("/socials");
    setAnchorE3(false);
  };

  const twitterClick = () => {
    window.open("http://twitter.com");
  };

  const emailClick = () => {
    window.open(
      "mailto:email@example.com?subject=Subject&body=Body%20goes%20here"
    );
  };

  const linkdinClick = () => {
    window.open("https://www.linkedin.com");
  };

  const contextValue = {
    El: anchorEl,
    E2: anchorE2,
    E3: anchorE3,
    homeopen: homeOpen,
    click1: handleClick1,
    close1: handleClose1,
    click2: handleClick2,
    close2: handleClose2,
    click3: handleClick3,
    close3: handleClose3,
    mpclose: mpdropmenuClose,
    tsclose: tsdropmenuClose,
    ciclose: cidropmenuClose,
    aclose: acdropmenuClose,
    bclose: bcdropmenuClose,
    lclose: ldropmenuClose,
    blclose: bldropmenuClose,
    smclose: smdropmenuClose,
    twopen: twitterClick,
    emopen: emailClick,
    ldopen: linkdinClick,
  };

  return (
    <CryptoContext.Provider value={contextValue}>
      {props.children}
    </CryptoContext.Provider>
  );
};

export default CryptoContextProvider;
