import React, { useState } from "react";
import Input from "../components/Input";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
const useStyles = makeStyles((theme) => ({
  signUpForm: {
    width: "35%",
    marginLeft: "33%",
    marginTop: "70px",
    padding: "20px",
    backgroundColor: "white",
    boxShadow: "0 3px 6px rgb(148, 122, 122)",
    borderRadius: "5%",
  },
}));
export default function SignUpForm() {
  const classes = useStyles();
  const history = useHistory();
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  const handleFName = (event) => {
    const { value } = event.target;
    setfName(value);
  };
  const handleLName = (event) => {
    const { value } = event.target;
    setlName(value);
  };
  const handleContact = (event) => {
    const { value } = event.target;
    setContact(value);
  };
  const handlePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
  };
  const handleSignUp = () => {
    if (
      fName !== "" &&
      password !== "" &&
      lName !== "" &&
      contact !== "" &&
      password !== ""
    ) {
      history.push("/sign-in");
    }
  };
  return (
    <Box className={classes.signUpForm}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
        }}
      >
        <label
          style={{
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          Sign up
        </label>
        <label>It’s quick and easy.</label>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Input inputText="First Name" onChange={handleFName} value={fName} />
        <Input inputText="Last Name" onChange={handleLName} value={lName} />
      </Box>
      <Box>
        <Input
          inputText="Mobile Number or Email"
          onChange={handleContact}
          value={contact}
        />
        <Input
          inputText="New Password"
          onChange={handlePassword}
          value={password}
        />
      </Box>

      <p>
        By clicking Sign Up, you agree to our Terms, Data Policy and Cookies
        Policy. You may receive SMS Notifications from us and can opt out any
        time.
      </p>
      <Button onClick={handleSignUp} color="secondary">
        {" "}
        Sign Up{" "}
      </Button>
    </Box>
  );
}
