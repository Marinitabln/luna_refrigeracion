import React from "react";
import styles from "../styles/servicesImages.module.css";
import heladera from "../assets/img/service1.jpg";
import lavarropa from "../assets/img/service2.jpg";
import aire from "../assets/img/service3.jpg";
import { Container } from "react-bootstrap";

const ServicesImages = () => {
  return (
    <section>
      <Container>
        <div className={styles.containerImages}>
          <div id="img-1" className={styles.divImg}>
            <img src={heladera} alt="Reparación heladeras no-frost y convencionales" />
          </div>
          <div id="img-2" className={styles.divImg}>
          <img src={lavarropa} alt="Reparación lavarropas digitales y mecánicos" />
          </div>
          <div id="img-3" className={styles.divImg}>
          <img src={aire} alt="Reparación aires acondicionados" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesImages;
