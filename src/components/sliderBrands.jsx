import styles from "../styles/sliderBrands.module.css";
import whirpool from "../assets/img/whirpool.png";
import samsung from "../assets/img/samsung.png";
import lg from "../assets/img/lg.png";
import candy from "../assets/img/candy.png";
import peabody from "../assets/img/peabody.png";
import ariston from "../assets/img/ariston.png";
import drean from "../assets/img/drean.png";
import longvie from "../assets/img/longvie.png";
import patrick from "../assets/img/patrick.png";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import { Container } from "react-bootstrap";

SwiperCore.use([Navigation]);

const SliderBrands = () => {
  return (
    <>
      <div className={styles.sliderBrands}>
        <Container>
          <h6>
            trabajamos <br></br>
            <strong>TODAS LAS MARCAS</strong>
          </h6>
          <Swiper
            style={{
              "--swiper-navigation-color": "#666",
              "--swiper-navigation-size": "15px",
              "marginTop": "20px"
             
            }}
            breakpoints={{
              // when window width is >= 640px
              480: {
                width: 480,
                slidesPerView: 3,
              },
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 5,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 7,
              },
            }}
            id="main"
            width="360"
            navigation
            spaceBetween={5}
            slidesPerView={3}
            speed={1000}
          >
            
              <SwiperSlide>
                <img style={{ height: "5vh" }} src={whirpool} alt="Whirpool" />
              </SwiperSlide>
              <SwiperSlide>
                <img style={{ height: "5vh" }} src={lg} alt="LG" />
              </SwiperSlide>
              <SwiperSlide>
                <img style={{ height: "5vh" }} src={samsung} alt="Samsung" />
              </SwiperSlide>
              <SwiperSlide>
                <img style={{ height: "5vh" }} src={drean} alt="Drean" />
              </SwiperSlide>
              <SwiperSlide>
                <img style={{ height: "5vh" }} src={peabody} alt="Peabody" />
              </SwiperSlide>
              <SwiperSlide>
                <img style={{ height: "5vh" }} src={patrick} alt="Patrick" />
              </SwiperSlide>
              <SwiperSlide>
                <img style={{ height: "5vh" }} src={candy} alt="Candy" />
              </SwiperSlide>
              <SwiperSlide>
                <img style={{ height: "5vh" }} src={longvie} alt="Longvie" />
              </SwiperSlide>
              <SwiperSlide>
                <img style={{ height: "5vh" }} src={ariston} alt="Ariston" />
              </SwiperSlide>
          </Swiper>
        </Container>
      </div>
    </>
  );
};
export default SliderBrands;
