import React, { useState, useEffect } from "react";
import Flex from "../components/layout/Flex";
import Grid, { GridItem } from "../components/layout/Grid";
import "../styles/contactpage.css";

const ContactPage = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
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
    }
    if (!values.message) {
      errors.message = "Please enter a message";
    }
    return errors;
  };

  return (
    <div className="page-padding">
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      <Flex stack={true} spacing={48}>
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
                </Flex>
                <p className="error">{formErrors.firstName}</p>
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
                </Flex>
                <p className="error">{formErrors.lastName}</p>
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
                  className=""
                  type="checkbox"
                  style={{
                    margin: 0,
                    height: "20px",
                    width: "20px",
                    borderRadius: "6px",
                    border: "1px solid #d0d5dd",
                  }}
                />
                <p className="gray-600 ">
                  You agree to providing your data to Kojo Baffoe to who may
                  contact you.
                </p>
              </Flex>
              <button>
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
