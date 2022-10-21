import React from "react";
import Services from "../services/Services";
import Slider from "./Slider";
import styled from "styled-components";

const Spacer = styled.div`
  height: 80px;
  background-color: #d2001a;

  @media only screen and (min-width: 768px) {
    height: 90px;
  }
`;

const Home = () => {
  return (
    <>
      <Slider />
      <Spacer></Spacer>
      <Services />
    </>
  );
};

export default Home;
