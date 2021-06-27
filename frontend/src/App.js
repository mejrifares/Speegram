import { useContext } from "react";
import LogInSignUp from "./components/LogInSignUp/LogInSignUp";
import { Redirect, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import EditUser from "./components/Profile/EditUser";
import Home from "./components/Home/Home";
import Messanger from "./components/Messanger/Messanger";
import { AuthContext } from "./context/AuthContext";
import Notification from "./components/notification/Notification";
import People from "./components/people/People";

function App() {
  const {user} = useContext(AuthContext)


  return (
    <>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <LogInSignUp/> }
          </Route>
          <Route exact path="/loginsignup">
            {user ? <Redirect to="/"/> : <LogInSignUp />}
          </Route>
          <Route exact path="/profile/:username">
            <Profile />
          </Route>
          <Route exact path="/messanger">
            <Messanger />
          </Route>
          <Route exact path="/notification">
            <Notification />
          </Route>
          <Route exact path="/editprofile">
            <EditUser />
          </Route>
          <Route exact path="/people">
            <People />
          </Route>
        </Switch>
    </>
  );
}

export default App;
