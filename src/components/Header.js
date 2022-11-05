import React from "react";
import "../styles/header.css";
import Flex from "./layout/Flex";
import share from "../assets/icons/share.svg";
import share_alt from "../assets/icons/share-hover.svg";
import profile_img from "../assets/images/profile-img.svg";
import profile_alt from "../assets/images/profile-img-alt.svg";
import dots from "../assets/icons/dots.svg";

const Header = () => {
  return (
    <div className="" style={{ position: "relative" }}>
      <Flex className="header-padding" jc="center">
        <Flex stack={true} spacing={24} className="">
          <Flex jc="center" className="figure">
            <img src={profile_img} alt="" className="image-main" />
            <img src={profile_alt} alt="" className="image-hov" />
          </Flex>

          <p id="twitter" className="bold">
            Kojo Baffoe
          </p>
          <p id="slack" style={{ display: "none" }}>
            Clement Ankomah
          </p>
        </Flex>
      </Flex>
      <Flex className="figure show share-pos  " jc="flex-end">
        <img src={share} className="image-main" />
        <img src={share_alt} className="image-hover " />
      </Flex>
      <div className="share-pos hide">
        <img src={dots} alt="" />
      </div>
    </div>
  );
};

export default Header;
