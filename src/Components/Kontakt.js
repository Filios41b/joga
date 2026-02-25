import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaPhone } from "react-icons/fa";

function Kontakt() {
    return (
        <div className="container mt-5 text-white">
            <h1>Kontakt</h1>
            <div className='spacer50'></div>
            <div>
                <h2><b>Agnieszka Chołdrych</b></h2>
            </div>
            <div>
                <a className='icon' href='mailto:test@test.com'>
                    <FaEnvelope/>
                </a>
                <p>test@test.com</p>
            </div>
            <div> 
                <a className="icon" href='tel:000000000'>
                    <FaPhone />
                </a>
                <p>(+48) 000 000 000</p>
            </div>
        </div>
    );
}
export default Kontakt;