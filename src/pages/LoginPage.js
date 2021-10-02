import Button from "../components/Button";
import ButtonSecondary from "../components/ButtonSecondary";
import { makeStyles } from "@material-ui/core/styles";
import Input from "../components/Input";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  loginContainer: {
    display: "flex ",
    padding: "50px",
  },
  loginPageText: {
    marginTop: "13%",
    width: "50%",
    marginLeft: "40px",
    padding: "0",
  },
  loginForm: {
    marginTop: "7%",
    padding: "40px",
    width: "30%",
    marginLeft: "120px",
    border: "2px solid white",
    borderRadius: "10px",
    boxShadow: "0 3px 6px rgb(148, 122, 122)",
    backgroundColor: "white",
  },
  facebook: {
    color: "#1877f2",
    fontSize: "60px",
    textAlign: "left",
    margin: "0",
    height: "90px",
  },
  facebookBelow: {
    fontSize: "28px",
    fontWeight: "normal",
    textAlign: "left",
    margin: "0",
    lineHeight: "32px",
  },
  forgotPassword: {
    color: "#1877f2",
    marginBottom: "25px",
  },
}));
const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleSignUp = () => {
    history.push("/sign-up-page");
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
          <Input inputText="Email or Phone number" />
          <Input inputText="Password" />
          <Button>Log in</Button>
          <p className={classes.forgotPassword}>forgot Password ?</p>
          <hr width="90%" />
          <ButtonSecondary onClick={handleSignUp}>
            Create New Account
          </ButtonSecondary>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
