import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import styles from "../../styles/slides.module.css";
import slider1 from "../../assets/img/slider1.jpg";
import slider2 from "../../assets/img/slider2.jpg";
import slider3 from "../../assets/img/slider3.jpg";
import useMediaQuery from "../../hook/useQuery";

const Slider = () => {
  const [media, setMedia] = useState();

  const isMobile = useMediaQuery(768);
  const isTablet = useMediaQuery(1024);

  useEffect(() => {
    if (isMobile) {
      setMedia("500px");
    } else if (isTablet) {
      setMedia("600px");
    } else {
      setMedia("700px");
    }
  }, []);

  const navigate = useNavigate();
  const linkToContact = () => {
    navigate("/contact");
  };

  return (
    <Carousel>
      <Carousel.Item>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            className="d-block"
            src={slider1}
            height={media}
            alt="Reparación de heladeras no-frost y convencionales"
          />
        </div>
        <Carousel.Caption style={{ bottom: "18%" }}>
          <h4>reparación de</h4>
          <h1>
            HELADERAS <strong>NO-FROST</strong>
          </h1>
          <h5>y convencionales</h5>
          <button className={styles.buttonLine} onClick={linkToContact}>
            solicitar presupuesto
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            className="d-block"
            src={slider2}
            height={media}
            alt="Reparación de lavarropas digitales y mecánicos"
          />
        </div>
        <Carousel.Caption style={{ bottom: "18%" }}>
          <h4>reparación de</h4>
          <h2 className="h1">
            LAVARROPAS <strong>DIGITALES</strong>
          </h2>
          <h5>y mecánicos</h5>
          <button className={styles.buttonLine} onClick={linkToContact}>
            solicitar presupuesto
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            className="d-block"
            src={slider3}
            height={media}
            alt="Instalación, mantenimiento y reparación de aires acondicionados"
          />
        </div>
        <Carousel.Caption style={{ bottom: "18%" }}>
          <h4>instalación y reparación de</h4>
          <h2 className="h1">
            EQUIPOS DE AIRE <strong>ACONDICIONADO</strong>
          </h2>
          <h5>split | compacto | portátil</h5>
          <button className={styles.buttonLine} onClick={linkToContact}>
            solicitar presupuesto
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;

/* const handleResize = () => {
  
  if (isMobile) {
    setMedia("500px");
  } else if (isTablet) {
    setMedia("600px");
  } else {
    setMedia("700px");
  }
};

useEffect(() => {    
  handleResize();
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []); */
