import Carousel from "react-elastic-carousel";
import styled from "styled-components";


const sliderBrands = ()=> {

    const breakPoints = [
        { width: 1, itemsToShow: 3 },
        { width: 550, itemsToShow: 5 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];

      const Item = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: auto;
      width: 32%;
      color: #fff;
      margin: 0 15px;
    `;

  return (
    <>
      <h6>trabajamos <strong>TODAS LAS MARCAS</strong></h6>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>{Whirpool}</Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </Carousel>
      </div>
    </>
  );
}

export default sliderBrands;
