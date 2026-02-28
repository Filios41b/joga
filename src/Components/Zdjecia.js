import React from 'react';
import AnimatedSectionPhotos from "./AnimatedSectionPhotos";
import 'bootstrap/dist/css/bootstrap.min.css';

function Zdjecia() {
  return (
    <AnimatedSectionPhotos>
      <div className="container mt-5 text-white gallery-container">
        <h1 className='mb-4'>GALERIA</h1>
        <div className="row">
            <div className="col-md-4 mb-4 photo">
                <img src="/Images/plakat2.png" alt="Zdjęcie 1" className="img-fluid rounded" />
            </div>
            <div className="col-md-4 mb-4 photo">
                <img src="/images/zdjecie2.jpg" alt="Zdjęcie 2" className="img-fluid rounded" />
            </div>
            <div className="col-md-4 mb-4 photo">
                <img src="/images/zdjecie3.jpg" alt="Zdjęcie 3" className="img-fluid rounded" />
            </div>
            <div className="col-md-4 mb-4 photo">
                <img src="/images/zdjecie4.jpg" alt="Zdjęcie 4" className="img-fluid rounded" />
            </div>
            <div className="col-md-4 mb-4 photo">
                <img src="/images/zdjecie5.jpg" alt="Zdjęcie 5" className="img-fluid rounded" />
            </div>
            <div className="col-md-4 mb-4 photo">
                <img src="/images/zdjecie6.jpg" alt="Zdjęcie 6" className="img-fluid rounded" />
            </div>
        </div>
      </div>
    </AnimatedSectionPhotos>
  );
}

export default Zdjecia;