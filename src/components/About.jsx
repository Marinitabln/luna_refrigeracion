import { Container } from "react-bootstrap";
import Styles from "../styles/section.module.css";

const About = () => {
  return (
    <section className={Styles.section}>
      <Container>
        <h3 className={Styles.subtitleRed}>
          sobre <br></br>
          <strong>NOSOTROS</strong>
        </h3>
        <div className={Styles.line}></div>
        <article className={Styles.pSection}>
          <p>
            Somos una empresa familiar que,{" "}
            <strong>desde 1984, nos especializamos</strong> en la reparación de
            electrodomésticos de línea blanca, para clientes residenciales y
            empresas.
          </p>
          <p>
            Los pilares de nuestro trabajo son:
            <ul>
              <li>Cumplimiento y Puntualidad;</li>
              <li>Calidad en atención;</li>
              <li>Responsabilidad y Confiabilidad.</li>
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
