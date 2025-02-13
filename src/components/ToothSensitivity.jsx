import React from 'react';
import './ToothSensitivity.css'; // Assuming you have a CSS file for styling

const ToothSensitivity = () => {
  return (
    <div className="container" style={{ backgroundImage: `url('sensitivitybg.webp')` }}>
      <header>
        <div className="header-content">
          <a href="/" className="home-link">
            <span role="img" aria-label="home">🏠</span>
          </a>
          <h1>Tooth Sensitivity</h1>
        </div>
      </header>
      <section className="content">
        <img src="sensitivity.jpg" alt="Tooth Sensitivity" className="sensitivity-image" />
        <p>
          Tooth sensitivity, also known as dentin hypersensitivity, is a common dental problem characterized by sharp, temporary pain in response to stimuli such as hot, cold, sweet, or acidic foods and drinks. It occurs when the protective enamel on the tooth wears down, exposing the underlying dentin and nerve pathways. Tooth sensitivity can affect one or more teeth and can significantly impact daily life if left untreated.
        </p>
        <h1>Common Causes:</h1>
        <p>
          Tooth sensitivity is often caused by enamel erosion due to aggressive brushing, acidic foods, or grinding teeth. Receding gums, which expose the tooth roots, can also lead to sensitivity. Other causes include tooth decay, cracked teeth, worn fillings, or recent dental procedures like teeth whitening. In some cases, sensitivity may be a symptom of an underlying dental issue that requires professional attention.
        </p>
        <h1>Prevention and Treatment:</h1>
        <p>
          To prevent tooth sensitivity, use a soft-bristled toothbrush and avoid brushing too hard. Switch to a toothpaste designed for sensitive teeth, which helps block nerve pathways. Limit consumption of acidic foods and drinks, and wear a mouthguard if you grind your teeth. If sensitivity persists, consult your dentist, who may recommend treatments such as fluoride gel, dental bonding, or a gum graft to protect exposed roots.
        </p>
      </section>
    </div>
  );
};

export default ToothSensitivity;