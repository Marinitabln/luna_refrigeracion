import Services from "./Services";
import Slider from "./Slider";
import styled from "styled-components";

const Home = () => {
  const Spacer = styled.div`
    height: 80px;
    background-color: #d2001a;

    @media only screen and (min-width: 768px) {
      height: 90px;
    }
  `;

  return (
    <>
      <Slider />
      <Spacer></Spacer>
      <Services />
    </>
  );
};

export default Home;
