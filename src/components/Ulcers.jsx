import React from 'react';
import './Ulcers.css'; 

const Ulcers = () => {
  return (
    <div className="container" style={{ backgroundImage: `url('ulcersbg.webp')` }}>
      <header>
        <div className="header-content">
          <a href="/" className="home-link">
            <span role="img" aria-label="home">🏠</span>
          </a>
          <h1>Mouth Ulcers</h1>
        </div>
      </header>
      <section className="content">
        <img src="ulcers.jpg" alt="Mouth Ulcers" className="ulcers-image" />
        <p>
          Mouth ulcers, also known as canker sores, are small, painful lesions that develop on the soft tissues inside the mouth, such as the gums, tongue, or inner cheeks. They are usually round or oval with a white or yellow center and a red border. While most mouth ulcers are harmless and heal on their own, they can cause discomfort and make eating or speaking difficult.
        </p>
        <h1>Common Causes:</h1>
        <p>
          Mouth ulcers can be caused by a variety of factors, including minor injuries from dental work, brushing too hard, or biting the inside of your cheek. Other causes include stress, hormonal changes, vitamin deficiencies (such as B12 or iron), and certain foods like citrus fruits or spicy dishes. In some cases, mouth ulcers may be linked to underlying health conditions like autoimmune diseases or gastrointestinal disorders.
        </p>
        <h1>Treatment and Prevention:</h1>
        <p>
          Most mouth ulcers heal on their own within 1-2 weeks. To relieve pain, you can use over-the-counter topical treatments or rinse your mouth with saltwater. Avoiding spicy, acidic, or rough foods can help prevent irritation. Maintaining good oral hygiene and managing stress can also reduce the frequency of ulcers. If ulcers persist for more than two weeks or are unusually large, consult a dentist or doctor for further evaluation.
        </p>
      </section>
    </div>
  );
};

export default Ulcers;