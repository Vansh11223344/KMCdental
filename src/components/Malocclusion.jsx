import React from 'react';
import './Malocclusion.css'; // Assuming you have a CSS file for styling

const Malocclusion = () => {
  return (
    <div className="container" style={{ backgroundImage: `url('src/components/toothachebg.webp')` }}>
      <header>
        <div className="header-content">
          <a href="/" className="home-link">
            <span role="img" aria-label="home">🏠</span>
          </a>
          <h1>Malocclusion</h1>
        </div>
      </header>
      <section className="content">
         {/*<img src="malocclusion.jpg" alt="Malocclusion" className="malocclusion-image" />*/}
        <p>
          Malocclusion refers to the misalignment of teeth or incorrect relation between the teeth of the two dental arches. It can lead to issues such as difficulty chewing, speech problems, and an increased risk of tooth decay and gum disease. Malocclusion is often classified into different types, including overbite, underbite, crossbite, and open bite.
        </p>
        <h1>Common Causes:</h1>
        <p>
          Malocclusion can be caused by genetic factors, such as inherited jaw or tooth size discrepancies. It can also result from childhood habits like thumb sucking, prolonged use of a pacifier, or tongue thrusting. Other causes include premature loss of baby teeth, improper dental restorations, and injuries to the jaw or teeth.
        </p>
        <h1>Treatment and Prevention:</h1>
        <p>
          Treatment for malocclusion depends on the severity and type of misalignment. Orthodontic treatments, such as braces or clear aligners, are commonly used to correct malocclusion. In severe cases, surgery may be required to reposition the jaw. Early intervention in childhood can help prevent or minimize malocclusion. Regular dental check-ups and addressing harmful habits early can also reduce the risk of developing malocclusion.
        </p>
      </section>
    </div>
  );
};

export default Malocclusion;