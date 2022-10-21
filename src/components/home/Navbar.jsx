import React from "react";
import { NavLink } from "react-bootstrap";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: right;
  background: #f5f5f5;
  color: #16213e;
  font-size: 12px;
  font-weight: 700;
  line-height: 400%;
  position: fixed;
  top: 15vh;
  right: ${(props) => (props.open ? "0" : "-100%")};
  width: 47%;
  height: 34vh;
  transition: right 0.3s linear;
  padding-right: 14%;
  padding-top: 2.5%;
  z-index: 99999;

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: flex-end;
    color: white;
    background: none;
  }
`;

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <NavLink to="/">INICIO</NavLink>
      <NavLink to="/about">NOSOTROS</NavLink>
      <NavLink to="/services">SERVICIOS</NavLink>
      <NavLink to="/contact">CONTACTO</NavLink>
    </NavbarWrapper>
  );
}

export default Navbar;
