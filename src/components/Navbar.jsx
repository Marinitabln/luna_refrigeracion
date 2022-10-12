import { NavLink } from "react-bootstrap";
import styled from "styled-components";

function Navbar({ open }) {
   

const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align:right;
  background: #F5F5F5;
  color: #16213E;
  font-size: 12px;
  font-weight: 700;
  line-height: 400%;
  position: fixed;
  top: 15vh;
  right: ${props => (props.open ? "0" : "-100%")};
  width: 47%;
  height: 34vh;
  transition: right 0.3s linear;
  padding-right: 14%;
  padding-top: 2.5%;

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: flex-end;
    color: white;
    background: none;
    
  }
`;
  return (
      <NavbarWrapper open={open}>
        <NavLink to="/">INICIO</NavLink>
        <NavLink to="/aboutUs">NOSOTROS</NavLink>
        <NavLink to="/services">SERVICIOS</NavLink>
        <NavLink to="/contact">CONTACTO</NavLink>
      </NavbarWrapper>
  );
}

export default Navbar;
