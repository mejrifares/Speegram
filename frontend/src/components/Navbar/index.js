import React from 'react';
import {Redirect} from "react-router-dom"
import {useSelector} from "react-redux"
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.user)

  const HandleLogOut = () =>  {
    localStorage.clear()
    window.location.reload()


  }
  if(!user) return <Redirect to="/"/>

  return (

    <>
      <Nav>
        <NavLink to='/'>
          {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
          <img style={{width : "210px"}} src="./images/speegram.png" alt="logo" />
        </NavLink>
        {/* <div>
          <input type="text" placeholder="search"/>
        </div> */}
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/profile' activeStyle>
            Profile
          </NavLink>
          <NavLink to='/messanger' activeStyle>
            Messanger
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink onClick={HandleLogOut} to='/'>Log Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;