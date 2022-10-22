import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: right;
  background-color: rgba(239, 239, 239, 0.85);
  color: #16213e;
  font-size: 12px;
  font-weight: 700;
  line-height: 400%;
  border-bottom-left-radius: 5%;
  position: fixed;
  top: 15vh;
  right: ${(props) => (props.open ? "0" : "-100%")};
  width: 47%;
  height: 34vh;
  transition: right 0.3s linear;
  padding-right: 14%;
  padding-top: 2.5%;
  z-index: 99999;

 ${'' /*  [aria-current="page"] {
    color: ({ isActive }) => ({
    color: isActive ? "#d2001a" : "",
  });
  } */}

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: flex-end;
    color: white !important;
    background: none;
    padding-right: 0;
    width: 100%;
    font-size: 0.8rem;
    gap: 10px;
  }
`;

const Navbar = ({ open }) => {
  const active = ({ isActive }) => ({
    color: isActive ? "#d2001a" : "",
  });

  return (
    <NavbarWrapper open={open}>
      <NavLink to="/" style={active}>
        INICIO
      </NavLink>
      <NavLink to="/about" style={active}>
        NOSOTROS
      </NavLink>
      <NavLink to="/services" style={active}>
        SERVICIOS
      </NavLink>
      <NavLink to="/contact" style={active}>
        CONTACTO
      </NavLink>
    </NavbarWrapper>
  );
};

export default Navbar;
