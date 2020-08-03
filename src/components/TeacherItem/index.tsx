import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/61801350?s=400&u=a4186acaa417e9a26ec898d183a1781c2201c10b&v=4" alt="Kauê Cavalcante" />
        <div>
          <strong>Kauê Cavalcante</strong>
          <span>Front End</span>
        </div>
      </header>

      <p>
        Estudante de ADS.
        <br /><br />
        Apaixonado por JavaScript.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;