import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../logo.svg";
import {ButtonContainer} from './Button' 
import "../App.css";
import styled from "styled-components";

export default function Navbar() {
  return (
    <div>
      <NavWrapper className="navbar navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon Creative
        Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img src={navLogo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className='cart-spacing'>
              <i className="fas fa-cart-plus" />
            </span>
            My cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    </div>
  );
}

const NavWrapper = styled.nav `
background:var(--mainBlue);
.nav-link{
  color:var(--mainwhite)!important;
  font-size:1.3rem;
  text-transform:capitalize ;
}

`;
