import React from 'react';
import './Erosion.css'; 

const Erosion = () => {
  return (
    <div className="container" style={{ backgroundImage: `url('ulcersbg.webp')` }}>
      <header>
        <div className="header-content">
          <a href="/" className="home-link">
            <span role="img" aria-label="home">🏠</span>
          </a>
          <h1>Tooth Erosion</h1>
        </div>
      </header>
      <section className="content">
        <img src="tootherosion.jpg" alt="Tooth Erosion" className="tooth-erosion-image" />
        <p>
          Tooth erosion, also known as enamel erosion, is the gradual wearing away of the tooth's protective outer layer (enamel) due to acid exposure. This can lead to sensitivity, discoloration, and an increased risk of cavities. Unlike tooth decay, which is caused by bacteria, tooth erosion is primarily caused by acidic foods, drinks, or stomach acids.
        </p>
        <h1>Common Causes:</h1>
        <p>
          Tooth erosion is often caused by frequent consumption of acidic foods and beverages, such as citrus fruits, sodas, and wine. Acid reflux or GERD (gastroesophageal reflux disease) can also contribute to enamel erosion by exposing teeth to stomach acids. Other causes include dry mouth, excessive brushing with abrasive toothpaste, and environmental factors like chlorine in swimming pools.
        </p>
        <h1>Prevention and Treatment:</h1>
        <p>
          To prevent tooth erosion, limit your intake of acidic foods and drinks, and rinse your mouth with water after consuming them. Use a soft-bristled toothbrush and fluoride toothpaste to protect your enamel. If you suffer from acid reflux, seek medical treatment to manage the condition. For severe erosion, your dentist may recommend treatments such as bonding, veneers, or crowns to restore the tooth's structure and appearance.
        </p>
      </section>
    </div>
  );
};

export default Erosion;