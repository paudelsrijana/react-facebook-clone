import React, { useState } from "react";
import Button from "../components/Button";
import { makeStyles } from "@material-ui/core/styles";
import Input from "../components/Input";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  loginContainer: {
    display: "flex ",
    padding: "50px",
  },
  loginPageText: {
    marginTop: "12%",
    width: "50%",
    marginLeft: "40px",
  },
  loginForm: {
    marginTop: "6%",
    padding: "20px",
    width: "30%",
    marginLeft: "120px",
    border: "2px solid white",
    borderRadius: "10px",
    boxShadow: "0 3px 6px rgb(148, 122, 122)",
    backgroundColor: "white",
  },
  facebook: {
    color: "#1877f2",
    fontSize: "50px",
    textAlign: "left",
    margin: "0",
  },
  facebookBelow: {
    fontSize: "20px",
    fontWeight: "normal",
    textAlign: "left",
    margin: "0",
  },
  forgotPassword: {
    color: "#1877f2",
    marginBottom: "15px",
  },
}));
const LoginPage = ({ setUser }) => {
  const classes = useStyles();
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setName(value);
  };
  const handleChangePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
  };
  const handleSignUp = () => {
    history.push("/sign-up-page");
  };
  const handleLogin = () => {
    if (name !== "" && password !== "") {
      history.push("/home-page");
    }
  };
  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginPageText}>
        <h1 className={classes.facebook}>facebook</h1>
        <p className={classes.facebookBelow}>
          Connect with friends and the world around you on Facebook.
        </p>
      </div>

      <form className={classes.loginForm}>
        <div>
          <Input
            inputText="Email or Phone number"
            onChange={handleChange}
            value={name}
          />
          <Input
            inputText="Password"
            onChange={handleChangePassword}
            value={password}
          />
          <Button onClick={handleLogin} color="primary" fullWidth>
            Log in
          </Button>
          <p className={classes.forgotPassword}>forgot Password ?</p>
          <hr width="90%" />
          <Button onClick={handleSignUp} color="secondary">
            Create New Account
          </Button>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
