import React, { useState } from 'react';
import { motion } from "framer-motion";
import AnimatedSectionPhotos from "./AnimatedSectionPhotos";
import 'bootstrap/dist/css/bootstrap.min.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const photoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function Zdjecia() {
  const [activeImage, setActiveImage] = useState(null);

  const photos = [
    { src: "/Images/12org.jpg", vertical: true },
    { src: "/Images/4org.jpg" },
    { src: "/Images/9org.jpg" },
    { src: "/Images/11org.jpg", vertical: true },
    { src: "/Images/1org.jpg" },
    { src: "/Images/7org.jpg", vertical: true },
    { src: "/Images/10org.jpg" },
    { src: "/Images/13org.jpg", vertical: true },
    { src: "/Images/3org.jpg" },
    { src: "/Images/5org.jpg" },
    { src: "/Images/6org.jpg", vertical: true },
    { src: "/Images/8org.jpg" },
  ];

  return (
    <AnimatedSectionPhotos>
      <div className="container mt-5 text-white gallery-container">
        <h1 className="mb-4">GALERIA</h1>

        <motion.div 
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className={`photo ${photo.vertical ? "vertical" : ""}`}
              variants={photoVariants}
              onClick={() => setActiveImage(photo.src)}
            >
              <img
                src={photo.src}
                alt={`Joga Funkcjonalna - ${photo.src.split("/").pop().split(".")[0]}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {activeImage && (
        <div className="lightbox" onClick={() => setActiveImage(null)}>
          <span className="lightbox-close">&times;</span>
          <img src={activeImage} alt="fullscreen" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </AnimatedSectionPhotos>
  );
}

export default Zdjecia;