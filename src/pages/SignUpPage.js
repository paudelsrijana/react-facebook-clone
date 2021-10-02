import React from "react";
import Input from "../components/Input";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import SimpleSelect from "../components/Select";
import RadioComponent from "../components/Radio";
import { FormLabel } from "@material-ui/core";
import ButtonSecondary from "../components/ButtonSecondary";
const useStyles = makeStyles((theme) => ({
  signUpForm: {
    width: "34%",
    marginLeft: "33%",
    marginTop: "80px",
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
            marginLeft: "27px",
            paddingTop: "10px",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Sign up
        </label>
        <label style={{ marginLeft: "27px" }}>It’s quick and easy.</label>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Input inputText="First Name" className={classes.firstName} />
        <Input inputText="Last Name" className={classes.lastName} />
      </Box>
      <Input inputText="Mobile Number or Email" />
      <Input inputText="New Password" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          ml: "30px",
          mt: "10px",
        }}
      >
        <FormLabel>Birthday ?</FormLabel>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          ml: "20px",
          bgcolor: "background.paper",
        }}
      >
        <SimpleSelect text="Month" />
        <SimpleSelect text="Day" />
        <SimpleSelect text="Year" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          ml: "30px",
          mt: "10px",
        }}
      >
        <FormLabel> Gender ?</FormLabel>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          ml: "20px",
          bgcolor: "background.paper",
        }}
      >
        <RadioComponent gender="Male" />
        <RadioComponent gender="Female" />
        <RadioComponent gender="Custom" />
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
