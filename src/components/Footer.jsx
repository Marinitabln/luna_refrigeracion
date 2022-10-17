import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Map from "../components/Map";
import styles from "../styles/contact.module.css";

const Footer = () => {
  return (
    <section className={styles.bgBlue}>
      <Container>
        <h3 className={styles.subtitleWhite}>
          cómo <br></br>
          <strong>CONTACTARNOS</strong>
        </h3>
        <div className={styles.line}></div>
        <div className={styles.containerItems}>
          <div id="item-1" className={styles.divItem}>
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <ul>
              <li>
                <a href="tel:+542614314203">4314203</a>
              </li>
              <li>
                <a href="tel:+5492615253922">2615253922</a>
              </li>
              <li>
                <a href="tel:+5492615103024">2615103024</a>
              </li>
            </ul>
          </div>
          <div id="item-2" className={styles.divItem}>
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            <ul>
              <li>
                <a href="https://walink.co/616498">2615253922</a>
              </li>
            </ul>
          </div>
          <div id="item-3" className={styles.divItem}>
            <FontAwesomeIcon icon={faLocationDot} size="2x" />
            <ul>
              <li>
                Dante Alighieri 4050,<br></br>Bermejo. Guaymallén
              </li>
            </ul>
          </div>
        </div>
        <Map />
        <div className={styles.line}></div>
        <h6>
          <strong>HORARIOS DE ATENCIÓN:</strong>
          <br></br>Lunes a viernes, de 9 a 18hs.
        </h6>
      </Container>
    </section>
  );
};

export default Footer;
