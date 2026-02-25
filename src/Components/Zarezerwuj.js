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
          src="https://widget.zarezerwuj.pl/6609e190-2978-4240-9883-9757ad380163"
          className="zarezerwuj-iframe"
          seamless
          title="Zapisz się"
        ></iframe>
      </div>
    </AnimatedSection>
  );
}

export default Zarezerwuj;