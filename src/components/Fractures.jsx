import React from 'react';
import './Fractures.css'; // Assuming you have a CSS file for styling

const Fractures = () => {
  return (
    <div className="container" style={{ backgroundImage: `url('src/components/ulcersbg.webp')` }}>
      <header>
        <div className="header-content">
          <a href="/" className="home-link">
            <span role="img" aria-label="home">🏠</span>
          </a>
          <h1>Fractures of Teeth</h1>
        </div>
      </header>
      <section className="content">
    {/*     <img src="fracture.jpg" alt="Fractures of Teeth" className="fracture-image" />*/}
        <p>
          Fractures of teeth, also known as cracked or broken teeth, occur when a tooth is damaged due to trauma, biting on hard objects, or untreated cavities weakening the tooth structure. Depending on the severity, fractures can cause pain, sensitivity, and difficulty chewing. Prompt dental care is essential to prevent further damage or infection.
        </p>
        <h1>Common Causes:</h1>
        <p>
          Fractures of teeth are often caused by accidents, sports injuries, or falls. Biting down on hard foods like ice, nuts, or candy can also lead to cracks or breaks. Untreated cavities or large fillings can weaken the tooth, making it more prone to fractures. Teeth grinding (bruxism) and aging restorations like crowns or fillings can also contribute to tooth fractures.
        </p>
        <h1>Treatment Options:</h1>
        <p>
          Treatment for fractured teeth depends on the extent of the damage. For minor cracks, dental bonding or polishing may be sufficient. For more severe fractures, a crown or veneer may be needed to restore the tooth's shape and function. If the fracture exposes the pulp, a root canal may be required. In cases where the tooth cannot be saved, extraction followed by a dental implant or bridge may be recommended.
        </p>
      </section>
    </div>
  );
};

export default Fractures;