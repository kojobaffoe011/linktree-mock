import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import Flex from "../components/layout/Flex";
import Grid, { GridItem } from "../components/layout/Grid";
import "../styles/contactpage.css";

const ContactPage = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    checkbox: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [change, setChange] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 5000);
    setFormValues({ firstName: "", lastName: "", email: "", message: "" });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "First name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.message) {
      errors.message = "Please enter a message";
    }
    return errors;
  };

  const handleButtonDisability = () => {
    setChange(!change);
  };

  return (
    <div className="page-padding " style={{ position: "relative" }}>
      {Object.keys(formErrors).length === 0 && isSubmit
        ? isAlertVisible && (
            <Flex className="" jc="center">
              <div
                className=""
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  marginTop: "auto",
                  backgroundColor: "#1570ef",
                  position: "fixed",
                  top: "5px",
                  transition: "0s 4s",
                }}
              >
                <p className="white bold smallest">
                  Message sent successfully!
                </p>
              </div>
            </Flex>
          )
        : null}
      <Flex stack={true} spacing={48} className="">
        <Flex stack={true} spacing={16}>
          <h1 className="">Contact Me</h1>
          <p className="small gray-600">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </Flex>

        <form className="" onSubmit={handleSubmit}>
          <Flex stack={true} spacing={24}>
            <Grid span={12} gap="20px">
              <GridItem span={6} md={12} className="" style={{ width: "100%" }}>
                <Flex stack={true} spacing={6}>
                  <label>
                    <p className="gray-700 smallest">First Name</p>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    id="first_name"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleChange}
                  />
                  <p className="error">{formErrors.firstName}</p>
                </Flex>
              </GridItem>
              <GridItem span={6} md={12}>
                <Flex stack={true} spacing={6}>
                  <label>
                    <p className="gray-700 smallest">Last Name</p>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    id="last_name"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleChange}
                  />
                  <p className="error">{formErrors.lastName}</p>
                </Flex>
              </GridItem>
            </Grid>
            <Flex stack={true} spacing={6}>
              <label>
                <p className="gray-700 smallest">Email</p>
              </label>
              <input
                placeholder="yourname@email.com"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              <p className="error">{formErrors.email}</p>
            </Flex>

            <Flex stack={true} spacing={6}>
              <label>
                <p className="gray-700 smallest">Message</p>
              </label>
              <textarea
                style={{ height: "132px" }}
                placeholder="Send me a message and I'll reply you as soon as possible..."
                id="message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
              />
              <p className="error">{formErrors.message}</p>
            </Flex>

            <Flex stack={true} spacing={32}>
              <Flex className="" spacing={12}>
                <input
                  className="checkbox"
                  name="checkbox"
                  onChange={handleButtonDisability}
                  type="checkbox"
                  style={{
                    margin: 0,
                    height: "20px",
                    width: "20px",
                    borderRadius: "6px",
                    border: "1px solid #d0d5dd",
                  }}
                />

                <label className="">
                  <p className="gray-600 ">
                    You agree to providing your data to Kojo Baffoe who may
                    contact you.
                  </p>
                </label>
              </Flex>
              <button disabled={change} id="btn__submit">
                <p className="white bold smaller">Send Message</p>
              </button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </div>
  );
};

export default ContactPage;
