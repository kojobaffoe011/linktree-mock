import React from "react";
import Flex from "./layout/Flex";
import "../styles/links.css";
import git from "../assets/icons/git.svg";
import slack from "../assets/icons/slack.svg";

const Link = (props) => {
  return (
    <Flex
      className="bg-gray hover"
      jc="center"
      style={{
        paddingTop: "24px",
        paddingBottom: "24px",
        borderRadius: "8px",
      }}
    >
      <p className="black">{props.text}</p>
    </Flex>
  );
};

const Links = () => {
  return (
    <div className=" links-padding">
      <Flex stack={true} spacing={24}>
        <a href="https://google.com" target="_blank">
          <Link text={"Twitter Link"} />
        </a>
        <a href="https://training.zuri.team/" target="_blank" id="btn__zuri">
          <Link text={"Zuri Team"} />
        </a>
        <a
          title="find books about design and coding here!"
          href="https://books.zuri.team"
          target="_blank"
          id="books"
        >
          <Link text={"Zuri Books"} />
        </a>
        <a href="https://google.com" target="_blank">
          <Link text={"Python Books"} />
        </a>
        <a href="https://google.com" target="_blank">
          <Link text={"Background Check for Coders"} />
        </a>
        <a href="https://google.com" target="_blank">
          <Link text={"Design Books"} />
        </a>

        <Flex className="" jc="center" spacing={27}>
          <img src={slack} alt="" />
          <img src={git} alt="" />
        </Flex>
        <div></div>
        <div></div>
        <div></div>
      </Flex>
    </div>
  );
};

export default Links;
