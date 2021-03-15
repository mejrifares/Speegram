import React, { useState } from 'react'
import './LogInSignUp.css'
import { useDispatch } from "react-redux"
import { Userlogin, User_Register } from '../../JS/action/action'
import { Redirect } from 'react-router'
import {useSelector} from 'react-redux'


const LogInSignUp = () => {
  const loading = useSelector((state) => state.userReducer.loading);
  const isAuth = useSelector((state) => state.userReducer.isAuth)


  const [mail, setMail] = useState()
  const [pass, setPass] = useState()


  const login = (e) => {

    e.preventDefault()

    dispatch(Userlogin({
      email : mail,
      password : pass
    }))

  }


  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [bio, setBio] = useState()
  const [phone, setPhone] = useState()
  const dispatch = useDispatch()

  const adduser = (e) => {
    e.preventDefault()

    dispatch(User_Register({
      name,
      email,
      password,
      bio,
      phone
    }))

    setName("")
    setEmail("")
    setPassword("")
    setBio("")
    setPhone ("")
  }


  const HandleChange = () => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");

      sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
      });
    });


  }

  if (isAuth) return <Redirect to="/profile" />;

  return (

    <div>
       {loading ? (
        <h1> Please wait </h1>
      ) : (
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input onChange={(e)=>setMail(e.target.value)} type="text" name="mail" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input onChange={(e)=>setPass(e.target.value)} type="password" name="pass" placeholder="Password" />
              </div>
              <input onClick={login} type="submit" value="Login" className="btn solid" />
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input onChange={(e) => setPhone(e.target.value)} type="text" name="phone" placeholder="Phone" />
              </div><div className="input-field">
                <i className="fas fa-envelope"></i>
                <input onChange={(e) => setBio(e.target.value)} type="text" name="bio" placeholder="Bio" />
              </div>
              <button onClick={adduser} type="submit" className="btn" value="Sign up" >Sing up</button>

            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
            </p>
              <button onClick={HandleChange} className="btn transparent" id="sign-up-btn">
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
              <button className="btn transparent" id="sign-in-btn">
                Sign in
            </button>
            </div>
            <img className="image" src="./images/singinnow.png" alt="img" />
          </div>
        </div>
      </div>
      )}
    </div>

  )
}

export default LogInSignUp
