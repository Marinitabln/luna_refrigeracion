import React from "react";
import { Container } from "react-bootstrap";
import Styles from "../../styles/section.module.css";
import Form from "./Form";

const Contact = () => {

  return (
    <>
      <section className={Styles.section}>
        <Container>
          <h3 className={Styles.subtitleRed}>
            pedir <br></br>
            <strong>PRESUPUESTO</strong>
          </h3>
          <div className={Styles.line}></div>
          <article className={Styles.pSection}>
            <p>
              Para solicitar una cotización, puede dejarnos sus datos en el
              siguiente formulario o contactarnos a través de las opciones que
              figuran a continuación.
            </p>
            <p>A la brevedad, nos pondremos en contacto con Ud.</p>
          </article>
          <Form />
        </Container>
      </section>
    </>
  );
};

export default Contact;
