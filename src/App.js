import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import LeftSideBar from "./components/LeftSideBar";
import StoryFeed from "./components/Story";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/sign-in">
            <LoginPage />
          </Route>
          <Route path="/sign-up-page">
            <SignUpPage />
          </Route>
          <Route path="/home-page">
            <HomePage />
          </Route>
          <Route path="/sidebar">
            <LeftSideBar />
          </Route>
          <Route path="/story">
            <StoryFeed />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
