import React from 'react';
import './ImpactedWisdom.css'; // Assuming you have a CSS file for styling

const ImpactedWisdom = () => {
  return (
    <div className="container" style={{ backgroundImage: `url('toothachebg.webp')` }}>
      <header>
        <div className="header-content">
          <a href="/" className="home-link">
            <span role="img" aria-label="home">🏠</span>
          </a>
          <h1>Impacted Wisdom Teeth</h1>
        </div>
      </header>
      <section className="content">
        <img src="impactedwisdom.jpg" alt="Impacted Wisdom Teeth" className="impacted-wisdom-image" />
        <p>
          Impacted wisdom teeth are third molars at the back of the mouth that don't have enough room to emerge or develop normally. They may grow at an angle, partially emerge, or remain trapped within the jawbone. Impacted wisdom teeth can cause pain, swelling, infection, and damage to adjacent teeth. They often require surgical removal to prevent complications.
        </p>
        <h1>Common Causes:</h1>
        <p>
          Impacted wisdom teeth are primarily caused by a lack of space in the jaw. As the last teeth to emerge, they often don't have enough room to grow properly. Genetics, jaw size, and the angle of tooth eruption can also contribute to impaction. In some cases, wisdom teeth may become impacted due to overcrowding or misalignment of other teeth.
        </p>
        <h1>Symptoms and Treatment:</h1>
        <p>
          Symptoms of impacted wisdom teeth include pain, swelling, redness, difficulty opening the mouth, and bad breath. If left untreated, impacted wisdom teeth can lead to infections, cysts, or damage to nearby teeth. Treatment typically involves surgical extraction of the impacted teeth. Regular dental check-ups and X-rays can help detect impaction early and prevent complications.
        </p>
      </section>
    </div>
  );
};

export default ImpactedWisdom;