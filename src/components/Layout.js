import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Flex from "./layout/Flex";
// import Links from "../pages/Links";

const Layout = (props) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <Header /> */}
      <Flex stack={true}>{props.children}</Flex>
      {/* <Links /> */}
      <Footer />
    </div>
  );
};

export default Layout;
