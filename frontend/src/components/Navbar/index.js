import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
        </NavLink>
        <Bars />
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
          <NavBtnLink to='/logout'>Log Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;