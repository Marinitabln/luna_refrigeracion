import { Container } from "react-bootstrap";
import Styles from "../styles/services.module.css";
import SliderBrands from "./SliderBrands";

const Services = () => {
  return (
    <section className={Styles.section}>
      <Container>
        <h3>
          nuestros <strong>SERVICIOS</strong>
        </h3>
        <hr></hr>
        <article className={Styles.pSection}>
          <p>
            Brindamos <strong>servicio a domicilio</strong> de reparación de
            heladeras NO-FROST y convencionales; exhibidoras comerciales,
            lavarropas automáticos digitales y mecánicos; lavavajillas y
            microondas.
          </p>
          <p>
            Ofrecemos además el <strong>servicio matriculado</strong> de
            instalación, mantenimiento (limpieza, carga de gas), reparación y
            desintalación de aires acondicionados (split, compactos y
            portátiles).
          </p>
        </article>
      </Container>
      <SliderBrands />
    </section>
  );
};

export default Services;
