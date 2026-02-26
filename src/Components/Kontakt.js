import React from 'react';
import AnimatedSection from "./AnimatedSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaPhone } from "react-icons/fa";

function Kontakt() {
  return (
    <AnimatedSection>
      <div className="container mt-5 text-white">
        <h1>Kontakt</h1>
        <div className='spacer50'></div>
        <div>
          <h2><b>Agnieszka Chołdrych</b></h2>
        </div>
        <div>
          <a className='icon' href='mailto:agnieszkacholdrych@gmail.com'>
            <FaEnvelope/>
          </a>
          <p>agnieszkacholdrych@gmail.com</p>
        </div>
        <div> 
          <a className="icon" href='tel:691366649'>
            <FaPhone />
          </a>
          <p>(+48) 691 366 649</p>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Kontakt;