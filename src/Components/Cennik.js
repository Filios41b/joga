import React from 'react';
import AnimatedSection from "./AnimatedSection";
import 'bootstrap/dist/css/bootstrap.min.css';

function Cennik() {
    return (
      <AnimatedSection>
        <div className="container mt-5 text-white">
            <h1>Cennik</h1>
            <div className='spacer50'></div>
            <table className="table table-custom">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Cena</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Karnet miesięczny 4 wejścia</td>
                        <td>80zł</td>
                    </tr>
                    <tr>
                        <td>Karnet miesięczny 8 wejść</td>
                        <td>150zł</td>
                    </tr>
                    <tr>
                        <td>Wejście jednorazowe</td>
                        <td>25zł</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </AnimatedSection>
    );
}

export default Cennik;