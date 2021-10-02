import React from "react";
import Input from "../components/Input";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import SimpleSelect from "../components/Select";

import { FormLabel } from "@material-ui/core";
import ButtonSecondary from "../components/ButtonSecondary";
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
        <Input inputText="First Name" />
        <Input inputText="Last Name" />
      </Box>
      <Box>
        <Input inputText="Mobile Number or Email" />
        <Input inputText="New Password" />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <FormLabel>Birthday ?</FormLabel>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <SimpleSelect text="Month" />
        <SimpleSelect text="Day" />
        <SimpleSelect text="Year" />
      </Box>
      <p>
        By clicking Sign Up, you agree to our Terms, Data Policy and Cookies
        Policy. You may receive SMS Notifications from us and can opt out any
        time.
      </p>
      <ButtonSecondary> Sign Up </ButtonSecondary>
    </Box>
  );
}
