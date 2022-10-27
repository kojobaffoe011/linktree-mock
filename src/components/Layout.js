import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Flex from "./layout/Flex";
import Links from "./Links";

const Layout = (props) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Links />
      <Footer />
    </div>
  );
};

export default Layout;
