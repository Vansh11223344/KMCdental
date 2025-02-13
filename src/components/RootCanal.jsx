import React from 'react';
import './RootCanal.css'; // Assuming you have a CSS file for styling

const RootCanal = () => {
  return (
    <div className="container" style={{ backgroundImage: `url('cavitybg.webp')` }}>
      <header>
        <div className="header-content">
          <a href="/" className="home-link">
            <span role="img" aria-label="home">🏠</span>
          </a>
          <h1>Root Canal</h1>
        </div>
      </header>
      <section className="content">
        <img src="rootcanal.jpg" alt="Root Canal" className="root-canal-image" />
        <p>
          A root canal is a dental procedure used to treat infection or damage in the pulp of a tooth. The pulp, which contains nerves and blood vessels, can become infected due to deep decay, repeated dental procedures, or trauma. A root canal involves removing the infected pulp, cleaning and disinfecting the root canals, and sealing the tooth to prevent further infection.
        </p>
        <h1>Common Causes:</h1>
        <p>
          Root canals are typically needed when the pulp of a tooth becomes infected or inflamed. This can be caused by deep cavities, cracked or chipped teeth, or trauma to the tooth. Repeated dental procedures on the same tooth can also increase the risk of pulp damage. If left untreated, the infection can spread, leading to abscesses and bone loss.
        </p>
        <h1>Procedure and Aftercare:</h1>
        <p>
          During a root canal, the dentist removes the infected pulp, cleans and shapes the root canals, and fills them with a biocompatible material. The tooth is then sealed with a filling or crown to restore its function and appearance. After the procedure, it is normal to experience some discomfort, which can be managed with over-the-counter pain relievers. Good oral hygiene and regular dental check-ups are essential to maintain the treated tooth and prevent future issues.
        </p>
      </section>
    </div>
  );
};

export default RootCanal;