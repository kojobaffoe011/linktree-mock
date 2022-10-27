import React from "react";
import Grid, { GridItem } from "./layout/Grid";
import logo from "../assets/logo.svg";
import l4G from "../assets/I4G.svg";
import "../styles/footer.css";
import Flex from "./layout/Flex";

const Footer = () => {
  return (
    <div
      className="footer-position footer-padding "
      style={{ position: "relative" }}
    >
      <div className="footer-border"></div>
      <Grid span={12} gap="12px">
        <GridItem span={2} md={12} className="">
          <div>
            <img src={logo} alt="" />
          </div>
        </GridItem>
        <GridItem span={8} md={12} className="">
          <div className="text-pos">
            <p className="gray-alt">HNG Internship 9 Frontend Task</p>
          </div>
        </GridItem>
        <GridItem span={2} md={12} className="">
          <div className="logo-position">
            <img src={l4G} alt="" />
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Footer;
