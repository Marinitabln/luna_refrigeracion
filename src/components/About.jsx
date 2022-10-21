import React from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/section.module.css";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import nosotros from "../assets/img/aboutUs.jpg";

const About = () => {
  return (
    <section className={styles.section}>
      <Container>
        <h3 className={styles.subtitleRed}>
          sobre <br></br>
          <strong>NOSOTROS</strong>
        </h3>
        <div className={styles.line}></div>
        <article className={styles.pSection}>
          <p>
            Somos una empresa familiar que,
            <strong> desde 1984, nos especializamos</strong> en la reparación de
            electrodomésticos de línea blanca, para clientes residenciales y
            empresas.
          </p>
          
            <div className={styles.pilaresImg}>
              <ul className={styles.pilares}>
                <span>Los pilares de nuestro trabajo son:</span>
                <li>
                  <FontAwesomeIcon
                    icon={faCircleDot}
                    color="#D2001A"
                    size="small"
                  />  Cumplimiento y Puntualidad;
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleDot} color="#D2001A" />  Calidad
                  en atención;
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleDot} color="#D2001A" />  Responsabilidad y Confiabilidad.
                </li>
              </ul>
              <picture>
                <img
                  src={nosotros}
                  alt="Empresa familiar"
                  className={styles.imgAbout}
                />
              </picture>
            </div>
        </article>
      </Container>
    </section>
  );
};

export default About;
