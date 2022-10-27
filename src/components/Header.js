import React from "react";
import "../styles/header.css";
import Flex from "./layout/Flex";
import share from "../assets/icons/share.svg";
import dots from "../assets/icons/dots.svg";

const Header = () => {
  return (
    <div className="" style={{ position: "relative" }}>
      <Flex className="header-padding" jc="center">
        <Flex stack={true} spacing={24}>
          <div className="img" style={{ width: "100%", height: "88px" }} />

          <p id="twitter" className="bold">
            Annette Black
          </p>
          <p id="slack" style={{ display: "none" }}>
            Clement Ankomah
          </p>
        </Flex>
      </Flex>
      <div className="share-pos show">
        <img src={share} alt="" />
      </div>
      <div className="share-pos hide">
        <img src={dots} alt="" />
      </div>
    </div>
  );
};

export default Header;
