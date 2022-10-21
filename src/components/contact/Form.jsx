import React from "react";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";
import styles from "../../styles/form.module.css";

const Form = () => {
  const [resOk, setResOK] = useState(false);
  const enviarEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_t2qgxdk",
        "template_nxf53vq",
        e.target,
        "dKcDI_mdvZoj-lTAp"
      )
      .then(
        (res) => {
          if (res.status === 200) {
            setResOK(true);
          }
          console.log(res);
          console.log(resOk);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const resetForm = ()=>{
    setResOK(false);

  }
  const form = useRef();

  return !resOk ? (
    <form ref={form} onSubmit={enviarEmail}>
      <div className={styles.containerInputs}>
        <div className={styles.divInputs}>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre y apellido*"
            required
          />

          <input
            type="tel"
            id="celular"
            name="celular"
            placeholder="Celular*"
            required
          />

          <input
            type="mail"
            id="email"
            name="email"
            placeholder="Email*"
            required
          />

          <input
            type="text"
            id="direccion"
            name="direccion"
            placeholder="Dirección*"
            required
          />
        </div>
        <div className={styles.divTextarea}>
          <textarea
            type="text"
            id="mensaje"
            name="mensaje"
            placeholder="Mensaje*"
            required
          ></textarea>
        </div>
      </div>
      <span className={styles.spanForm}>(*) Campo obligatorio</span>
      <button className={styles.buttonSolid} type="submit">
        enviar
      </button>
    </form>
  ) : (
    <>
      <div >
        <p className={styles.messageOk}>
          ¡Su mensaje fue enviado exitosamente! Muchas gracias por escribirnos
        </p>
      </div>
      <button className={styles.buttonForm} onClick={resetForm}>
        nuevo mensaje
      </button>
    </>
  );
};

export default Form;
