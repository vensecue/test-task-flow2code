import React from 'react';
import './MainSection.scss';

const MainSection = () => {
  return (
    <div className="main-section">
      <img src="/test-task-flow2code/logo_ic.svg" alt="Logo" className="logo" />

      <div className="subscribe-section">
        <p className="subscribe-text">
          Bądź z nami <br />
          na bieżąco
          <span className="dot">.</span>
        </p>
      </div>

      <div className="linkedin-profile">
        <p>
          <a href="https://www.linkedin.com/company/flow2code/" target="_blank" rel="noopener noreferrer">
            <img src="/test-task-flow2code/icon.svg" alt="Linkedin Icon" className="icon" />
            <span>Zobacz profil Linkedin</span>
          </a>
        </p>
      </div>

      <div className="announcement-section">
        <p>
          Już niedługo zapraszamy <br /> na nową stronę internetową.
        </p>
        <p className="availability">
          Jesteśmy do Państwa dyspozycji <br />
          od poniedziałku do piątku od godziny 8 do 16.
        </p>
      </div>

      <div className="contact-section">
        <div className="contact-info">
          <p className="contact-item">
            <span className="left">Skontaktuj się <br /> z nami</span>
            <span className="right">office@imercon.pl <br /> 784 320 718</span>
          </p>
          <p className="contact-item">
            <span className="left">Odwiedź Nas</span>
            <span className="right">
              InterCon sp. z o.o. <br />
              Swadzim, ul. Parkowa <br />
              462-080 Tarnowo Podgórne <br />
              <br />
              NIP: 777-318-93-97 <br />
              REGON: 31558551 <br />
              KRS: 0000370939
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
