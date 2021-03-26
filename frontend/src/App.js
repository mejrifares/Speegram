import { useEffect } from "react"
import './App.css';
import LogInSignUp from './components/LogInSignUp/LogInSignUp'
import { Route, Switch} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile/Profile";
import { profile } from "./JS/action/action";
import EditUser from "./components/Profile/EditUser";
import Home from "./components/Home/Home";
import Messanger from "./components/Messanger/Messanger";
import SinglePage from "./pages/SinglePage"

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
        <PrivateRoute path="/editprofile" component={EditUser} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/messanger" component={Messanger} />
        <Route path="/posts/:postId" component={SinglePage} />



      </Switch>
  

    </div>
  );
}

export default App;
