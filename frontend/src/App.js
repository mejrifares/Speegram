import { useEffect } from "react"
import './App.css';
import LogInSignUp from './components/LogInSignUp/LogInSignUp'
import { Route, Switch} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile/Profile";
import { profile } from "./JS/action/action";

function App() {



  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  useEffect(() => {
    dispatch(profile());

  },[isAuth]);



  return (
    <div className="App">
    
      <Switch>
        <Route exact path="/" render={(props) => <LogInSignUp {...props} />} />
        <PrivateRoute exact path="/profile" component={Profile} />
      </Switch>

    </div>
  );
}

export default App;
