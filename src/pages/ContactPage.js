import React from "react";
import Flex from "../components/layout/Flex";
import Grid, { GridItem } from "../components/layout/Grid";
import "../styles/contactpage.css";

const ContactPage = () => {
  return (
    <div className="page-padding">
      <Flex stack={true} spacing={48}>
        <Flex stack={true} spacing={16}>
          <h1 className="">Contact Me</h1>
          <p className="small gray-600">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </Flex>

        <form className="">
          <Flex stack={true} spacing={24}>
            <Grid span={12} gap="20px">
              <GridItem span={6} md={12} className="" style={{ width: "100%" }}>
                <Flex stack={true} spacing={6}>
                  <label>
                    <p className="gray-700 smallest">First Name</p>
                  </label>
                  <input placeholder="Enter your first name" />
                </Flex>
              </GridItem>
              <GridItem span={6} md={12}>
                <Flex stack={true} spacing={6}>
                  <label>
                    <p className="gray-700 smallest">Last Name</p>
                  </label>
                  <input placeholder="Enter your last name" />
                </Flex>
              </GridItem>
            </Grid>
            <Flex stack={true} spacing={6}>
              <label>
                <p className="gray-700 smallest">Email</p>
              </label>
              <input placeholder="yourname@email.com" />
            </Flex>
            <Flex stack={true} spacing={6}>
              <label>
                <p className="gray-700 smallest">Message</p>
              </label>
              <textarea
                style={{ height: "132px" }}
                placeholder="Send me a message and I'll reply you as soon as possible..."
              />
            </Flex>
            <Flex jc="flex-start" className="">
              <div>
                <input
                  type="checkbox"
                  style={{
                    margin: 0,
                    height: "20px",
                    width: "20px",
                    borderRadius: "6px",
                  }}
                />
              </div>
            </Flex>
            <button>
              <p className="white bold">Send Message</p>
            </button>
          </Flex>
        </form>
      </Flex>
    </div>
  );
};

export default ContactPage;
