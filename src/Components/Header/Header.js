import React, { useState } from "react";
import HeaderNav from "./HeaderNav";
import SearchModal from "./SearchModal";
import TopNav from "./TopNav";

const Header = () => {
  const [show, setShow] = useState(false);

  const onHandleModal = () => {
    setShow(!show);
  };
  return (
    <>
      <TopNav />
      <HeaderNav onHandleModal={onHandleModal} show={show} />
      <SearchModal onHandleModal={onHandleModal} show={show} />
    </>
  );
};

export default Header;
