import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
  return (
    <div className="container mt-5 text-white main-page">
      <h1 className='joga text-center mb-4'>JOGA FUNKCJONALNA</h1>

      <p className='yoga-page lead-page'>
        Zajęcia łączące elementy treningu funkcjonalnego, pilatesu oraz łagodnej jogi, dzięki czemu są odpowiednie zarówno dla osób aktywnych, jak i wracających do ruchu po przerwie. To spokojny trening, który buduje siłę od środka, poprawia mobilność i wspiera regenerację.
      </p>

      <p className='yoga-page-lead mt-4'>
        Kompleksowe zajęcia wspierają sprawność całego ciała poprzez świadomy ruch i pracę z oddechem.
      </p>

      <div className='training-benefits-page mt-4'>
        <h3 className='training-title-page'>Podczas treningu:</h3>
        <ul className='training-list-page'>
          <li>Poprawisz zakres ruchu i elastyczność tkanek</li>
          <li>Wzmocnisz mięśnie głębokie odpowiedzialne za stabilizację</li>
          <li>Nauczysz się kontrolować postawę i pracę ciała w bezpiecznych wzorcach ruchowych</li>
          <li>Zmniejszysz napięcia i przeciążenia powstałe w wyniku siedzącego trybu życia lub intensywnych treningów</li>
        </ul>
      </div>
    </div>
  );
}

export default Main;