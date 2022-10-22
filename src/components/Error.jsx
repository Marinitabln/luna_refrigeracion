import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb } from "@fortawesome/free-solid-svg-icons";

const DivError = styled.div`
  background-color: white;
  color: #d2001a;
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 624px) {
  }
`;
const H2Style = styled.h2`
  width: 70%;
  max-width: 500px;
  height: 70vh;
  font-weight: 700;
  top: 100px;
  text-align: center;
  margin: 150px auto;
`;

const Error = () => {
  return (
    <DivError>
      <H2Style>
        <FontAwesomeIcon icon={faBomb} size="2x"/>
        <br></br><br></br>No se encontró el contenido buscado
      </H2Style>
    </DivError>
  );
};

export default Error;
