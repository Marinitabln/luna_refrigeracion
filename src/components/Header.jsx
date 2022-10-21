//import { NavLink } from "react-router-dom";
import React from "react";
import styles from "../styles/header.module.css";
import logo from "../assets/img/luna_refrigeracion_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import MenuButton from "../components/home/MenuBotton";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header className={styles.header}>
      <div className={styles.divHeader}>
        <Container>
          <Row className={styles.rowFlexEnd}>
            <Col className={styles.logo} xs={5} md={4} lg={4}>
              <Link to="/">
                <img id="logo" src={logo} alt="logo" />
              </Link>
            </Col>
            <Col className={styles.whatsappBar} xs={7} md={8} lg={8}>
              <div className={styles.whatsapp}>
                <a
                  href="https://walink.co/616498"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                  <span> CONTACTANOS</span>
                </a>
              </div>
              <div className={styles.bars}>
                <Navbar open={open} />
                <MenuButton open={open} handleClick={handleClick} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Header;
