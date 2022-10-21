import React from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/section.module.css";
import { faCircleDot} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <strong>desde 1984, nos especializamos</strong> en la reparación de
            electrodomésticos de línea blanca, para clientes residenciales y
            empresas.
          </p>
          <p >
            Los pilares de nuestro trabajo son:
            <ul className={styles.pilares}>
              <li><FontAwesomeIcon icon={faCircleDot} color="#D2001A" size="small"/> Cumplimiento y Puntualidad;</li>
              <li><FontAwesomeIcon icon={faCircleDot} color="#D2001A"/> Calidad en atención;</li>
              <li><FontAwesomeIcon icon={faCircleDot} color="#D2001A"/> Responsabilidad y Confiabilidad.</li>
            </ul>
          </p>
        </article>

        <picture>
          <source
            srcset="land-small-car-image.jpg 200w,
                land-medium-car-image.jpg 600w,
                land-large-car-image.jpg 1000w"
            sizes="(min-width: 700px) 500px,
               (min-width: 600px) 400px,
               100vw"
          />

          <img src="land-medium-car-image.jpg" alt="Car" />
        </picture>
      </Container>
    </section>
  );
};

export default About;
