import React from 'react';
import AnimatedSection from "./AnimatedSection";
import 'bootstrap/dist/css/bootstrap.min.css';

function Zarezerwuj() {
  return (
    <AnimatedSection>
      <div className="container mt-5 text-white">
        <h1>Zapisz się</h1>
        <div className="spacer50"></div>
        <iframe
          src="https://widget.zarezerwuj.pl/8aaf7279-d097-4978-9fc7-b5f4a0260f2e"
          className="zarezerwuj-iframe"
          seamless
          title="Zapisz się"
        ></iframe>
      </div>
    </AnimatedSection>
  );
}

export default Zarezerwuj;