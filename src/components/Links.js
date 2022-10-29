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
      <p className="black regular">{props.text}</p>
    </Flex>
  );
};

const Links = () => {
  return (
    <div className=" links-padding">
      <Flex stack={true} spacing={24}>
        <a
          href="https://twitter.com/kojobaffoe100"
          target="_blank"
          title="follow this dev on twitter!"
        >
          <Link text={"Twitter Link"} />
        </a>
        <a href="https://training.zuri.team/" target="_blank" id="btn__zuri">
          <Link text={"Zuri Team"} />
        </a>
        <a
          href="https://books.zuri.team"
          target="_blank"
          id="books"
          title="find books about design and coding here!"
        >
          <Link text={"Zuri Books"} />
        </a>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=buff"
          target="_blank"
          id="book__python"
          title="purchase books and learn all there is to know in your chosen field!"
        >
          <Link text={"Python Books"} />
        </a>
        <a
          href="https://background.zuri.team"
          target="_blank"
          id="pitch"
          title="do background checks for coders here :)"
        >
          <Link text={"Background Check for Coders"} />
        </a>
        <a
          href="https://books.zuri.team/design-rules"
          target="_blank"
          id="book__design"
          title="patronize free design books offered by Zuri!"
        >
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
