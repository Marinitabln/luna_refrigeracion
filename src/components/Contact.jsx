import { Container } from "react-bootstrap";
import styles from "../styles/contact.module.css";

const Contact = () => {
  return (
    <section className={styles.bgBlue}>
      <Container>
        <h3 className={styles.subtitleWhite}>
          cómo <strong>CONTACTARNOS</strong>
        </h3>
        <div className={styles.line}></div>
        <div className={styles.containerItems}>
         <div id="item-1">
            
         </div>

        </div>
      </Container>
    </section>
  );
};

export default Contact;
