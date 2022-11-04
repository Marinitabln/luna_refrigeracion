import React from "react";
import { Container } from "react-bootstrap";
import { useState } from "react";
import styles from "../../styles/form.module.css";

const FormCopy = () => {
  const [resOk, setResOK] = useState(false);

  const resetForm = () => {
    setResOK(false);
  };

  return (
    <>
      <Container>
        <p className={styles.messageOk}>
        ¡Su mensaje fue enviado exitosamente!<br></br>Muchas gracias por escribirnos.
        </p>

        <button className={styles.buttonSolid} onClick={resetForm}>
          nuevo mensaje
        </button>
      </Container>
    </>
  );
};

export default FormCopy;
