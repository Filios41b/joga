import React from 'react';
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';

const listVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const listItemVariants = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } };

function Main() {
  const benefits = [
    "Poprawisz zakres ruchu i elastyczność tkanek",
    "Wzmocnisz mięśnie głębokie odpowiedzialne za stabilizację",
    "Nauczysz się kontrolować postawę i pracę ciała w bezpiecznych wzorcach ruchowych",
    "Zmniejszysz napięcia i przeciążenia powstałe w wyniku siedzącego trybu życia lub intensywnych treningów"
  ];

  return (
    <AnimatedSection>
      <div className="container mt-5 text-white main-page">
        <h1 className='joga text-center mb-4'>JOGA FUNKCJONALNA</h1>
        <p className='yoga-page lead-page'>
          Zajęcia łączące elementy treningu funkcjonalnego, pilatesu oraz łagodnej jogi, dzięki czemu są odpowiednie zarówno dla osób aktywnych, jak i wracających do ruchu po przerwie. To spokojny trening, który buduje siłę od środka, poprawia mobilność i wspiera regenerację.
        </p>
        <p className='yoga-page-lead mt-4'>
          Kompleksowe zajęcia wspierające sprawność całego ciała poprzez świadomy ruch i pracę z oddechem.
        </p>
        <motion.div className='training-benefits-page mt-4' initial="hidden" animate="visible" variants={listVariants}>
          <h2 className='training-title-page'>Podczas treningu:</h2>
          <motion.ul className='training-list-page'>
            {benefits.map((item, index) => (
              <motion.li key={index} variants={listItemVariants}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

export default Main;