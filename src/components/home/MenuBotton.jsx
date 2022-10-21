import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const MenuButtonWrapper = styled.button`
  border: none;
  box-shadow: 0px 0px 1px rgb(50, 50, 50);
  margin-top: 1.3rem;

  @media only screen and (min-width: 624px) {
    display: none;
  }
`;

function MenuButton({ open, handleClick }) {
  return !open ? (
    <MenuButtonWrapper onClick={handleClick}>
      <FontAwesomeIcon icon={faBars} />
    </MenuButtonWrapper>
  ) : (
    <MenuButtonWrapper onClick={handleClick}>
      <FontAwesomeIcon icon={faXmark} /> 
    </MenuButtonWrapper>
  );
}

export default MenuButton;