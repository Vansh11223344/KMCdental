import React from 'react';
import './Hypoplasia.css'; // Assuming you have a CSS file for styling

const Hypoplasia = () => {
  return (
    <div className="container" style={{ backgroundImage: `url('toothachebg.webp')` }}>
      <header>
        <div className="header-content">
          <a href="/" className="home-link">
            <span role="img" aria-label="home">🏠</span>
          </a>
          <h1>Hypoplasia</h1>
        </div>
      </header>
      <section className="content">
        <img src="hypoplasia.jpg" alt="Hypoplasia" className="hypoplasia-image" />
        <p>
          Hypoplasia is a condition where the enamel of the teeth is underdeveloped, resulting in thin or missing enamel. This can make teeth more susceptible to decay, sensitivity, and damage. Hypoplasia can affect both primary (baby) and permanent teeth and is often caused by factors during tooth development, such as malnutrition, illness, or exposure to certain medications.
        </p>
        <h1>Common Causes:</h1>
        <p>
          Hypoplasia is commonly caused by disruptions during tooth development, such as malnutrition, infections, or high fevers during childhood. Prenatal factors like maternal illness or vitamin D deficiency can also contribute. Additionally, certain medications, such as tetracycline antibiotics, taken during pregnancy or early childhood, can lead to enamel hypoplasia. Genetic factors may also play a role in some cases.
        </p>
        <h1>Prevention and Treatment:</h1>
        <p>
          Preventing hypoplasia involves ensuring proper nutrition during pregnancy and early childhood, as well as avoiding medications that can affect enamel development. Treatment for hypoplasia focuses on protecting the teeth and reducing sensitivity. This may include fluoride treatments, dental sealants, bonding, or crowns to strengthen and protect the affected teeth. Regular dental check-ups are essential to monitor and manage the condition.
        </p>
      </section>
    </div>
  );
};

export default Hypoplasia;