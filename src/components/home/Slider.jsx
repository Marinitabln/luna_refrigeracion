import React from "react";
import { useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import styles from "../../styles/slides.module.css";
import slider1 from "../../assets/img/slider1.jpg";
import slider2 from "../../assets/img/slider2.jpg";
import slider3 from "../../assets/img/slider3.jpg";

const Slider = () =>{
    const[media, setMedia] = useState();

    useEffect(() => {  
      const handleResize = () => {
       if(window.innerWidth <= 767){
          setMedia("500px")
       }else if(window.innerWidth >= 768 && window.innerWidth <= 991 ){
        setMedia("400px")
       }else{
        setMedia("auto")
       }
      }    
      window.addEventListener('resize', handleResize);
      return () => {
       window.removeEventListener('resize', handleResize);
      };    
    }, []);    

    const navigate = useNavigate();
    const linkToContact = ()=>{
      navigate("/contact")
    }
  
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            src={slider1}
            height={media}
            alt="Reparación de heladeras no-frost y convencionales"
          />
          <Carousel.Caption style={{ bottom: '18%' }}>
            <h4>reparación de</h4>
            <h1>HELADERAS <strong>NO-FROST</strong></h1>
            <h5>y convencionales</h5>
            <button className={styles.buttonLine}>solicitar presupuesto</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={slider2}
            height={media}
            alt="Reparación de lavarropas digitales y mecánicos"
          />  
          <Carousel.Caption style={{ bottom: '18%' }}>
            <h4>reparación de</h4>
            <h2 className="h1">LAVARROPAS <strong>DIGITALES</strong></h2>
            <h5>y mecánicos</h5>
            <button className={styles.buttonLine} onClick={linkToContact}>solicitar presupuesto</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block"
          src={slider3}
          height={media}
          alt="Instalación, mantenimiento y reparación de aires acondicionados"            
          />
          <Carousel.Caption style={{ bottom: '18%' }}>
          <h4>instalación y reparación de</h4>
            <h2 className="h1">EQUIPOS DE AIRE <strong>ACONDICIONADO</strong></h2>
            <h5>split | compacto | portátil</h5>
            <button className={styles.buttonLine}>solicitar presupuesto</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default Slider;