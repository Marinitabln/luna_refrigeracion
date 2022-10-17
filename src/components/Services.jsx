import { Container } from "react-bootstrap";
import Styles from "../styles/section.module.css";
import SliderBrands from "./SliderBrands";

const Services = () => {
  return (
    <section className={Styles.section}>
      <Container>
        <h3 className={Styles.subtitleRed}>
          nuestros <br></br><strong>SERVICIOS</strong>
        </h3>
        <div className={Styles.line}></div>
        <article className={Styles.pSection}>
          <p>
            Brindamos <strong>servicio a domicilio</strong> de reparación de
            heladeras <em>NO-FROST</em> y convencionales; exhibidoras comerciales,
            lavarropas automáticos digitales y mecánicos; lavavajillas y
            microondas.
          </p>
          <p>
            Ofrecemos además el <strong>servicio matriculado</strong> de
            instalación, mantenimiento (limpieza, carga de gas), reparación y
            desintalación de aires acondicionados (<em>split,</em> compactos y
            portátiles).
          </p>
        </article>
      </Container>
      <SliderBrands />
    </section>
  );
};

export default Services;
