import React from "react";
import "../styles/header.css";
import Flex from "./layout/Flex";

const Header = () => {
  return (
    <Flex className="bordered header-padding" jc="center">
      <Flex stack={true} spacing={24}>
        <img id="profile_img" alt="" />
        <p id="twitter">Annette Black</p>
        <p id="slack" style={{ display: "none" }}>
          Clement Ankomah
        </p>
      </Flex>
    </Flex>
  );
};

export default Header;
