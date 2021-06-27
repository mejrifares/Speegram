import React, { useContext, useRef, useState } from "react";
import "./LogInSignUp.css";
import { useHistory } from "react-router";
import { CircularProgress } from "@material-ui/core";

import { FaUser } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";

import { loginCall } from "../../ApiCalls";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const LogInSignUp = () => {
  const [errorLog, setErrorLog] = useState(false);
  const [successLog, setSuccessLog] = useState(false);
  const { isFetching, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const mail = useRef();
  const pass = useRef();

  const login = async (e) => {
    e.preventDefault();

    try {
      loginCall(
        { email: mail.current.value, password: pass.current.value },
        dispatch,
        setSuccessLog(true)
      );
    } catch (err) {
      setErrorLog(true);
    }
  };
  

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const bio = useRef();

  const singUp = async () => {
    // e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Faliled password!");
    }
    const newUser = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      passwordAgain: passwordAgain.current.value,
      bio: bio.current.value,
    };
    try {
      await axios.post("/auth/register", newUser);
      // res.status(200).json("register succsefully")
      history.push("/loginsignup");
    } catch (err) {}
  };

  const HandleChange = () => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const containerrr = document.querySelector(".containerrr");

    sign_up_btn.addEventListener("click", () => {
      containerrr.classList.add("sign-up-mode");

      sign_in_btn.addEventListener("click", () => {
        containerrr.classList.remove("sign-up-mode");
      });
    });
  };

  // if (isAuth) return <Redirect to="/home" />;

  return (
    <div>
      <div className="containerrr">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <div className="inputIcon">
                  <FaUser />
                </div>
                <input
                  // onChange={(e) => setMail(e.target.value)}
                  type="text"
                  // name="email"
                  ref={mail}
                  placeholder="Username"
                />
              </div>
              <div className="input-field">
                <div className="inputIcon">
                  <FaUserLock />
                </div>
                <input
                  // onChange={(e) => setPass(e.target.value)}
                  type="password"
                  // name="password"
                  ref={pass}
                  placeholder="Password"
                />
              </div>
              <button
                onClick={login}
                type="submit"
                value="login"
                className="btnn solid"
              >
                {isFetching ? (
                  <CircularProgress color="#fff" size="25px" />
                ) : (
                  "Login"
                )}
              </button>
              {successLog && (
                <sapn>Login Success</sapn>
              )}
              {errorLog && (
                <span>Somthing Is Wrong</span>
              )}
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  // onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Username"
                  ref={username}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  // onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  ref={email}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  // onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  ref={password}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  // onChange={(e) => setPhone(e.target.value)}
                  type="password"
                  placeholder="Password Again"
                  ref={passwordAgain}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  // onChange={(e) => setBio(e.target.value)}
                  type="text"
                  placeholder="Bio"
                  ref={bio}
                />
              </div>
              <button
                onClick={singUp}
                type="submit"
                className="btnn"
                value="Sign up"
              >
                Sing up
              </button>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                onClick={HandleChange}
                className="btnn transparent"
                id="sign-up-btn"
              >
                Sign up
              </button>
            </div>
            <img src="./images/singupnow.png" className="image" alt="img" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btnn transparent" id="sign-in-btn">
                Sign in
              </button>
            </div>
            <img className="image" src="./images/singinnow.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInSignUp;
