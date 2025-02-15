import React from 'react';
import './Xerostomia.css'; // Assuming you have a CSS file for styling

const Xerostomia = () => {
  return (
    <div className="container" style={{ backgroundImage: `url('src/components/Sensitivitybg.webp')` }}>
      <header>
        <div className="header-content">
          <a href="/" className="home-link">
            <span role="img" aria-label="home">🏠</span>
          </a>
          <h1>Xerostomia (Dry Mouth)</h1>
        </div>
      </header>
      <section className="content">
         {/*<img src="xerostomia.jpg" alt="Xerostomia (Dry Mouth)" className="xerostomia-image" />*/}
        <p>
          Xerostomia, commonly known as dry mouth, is a condition where the salivary glands in the mouth do not produce enough saliva to keep the mouth moist. This can lead to discomfort, difficulty speaking or swallowing, and an increased risk of dental problems such as cavities and gum disease. Dry mouth can be a temporary or chronic condition and is often a side effect of medications or underlying health issues.
        </p>
        <h1>Common Causes:</h1>
        <p>
          Xerostomia is often caused by medications, such as antihistamines, decongestants, and antidepressants. Other causes include dehydration, radiation therapy to the head and neck, autoimmune diseases like Sjögren's syndrome, and conditions like diabetes or Parkinson's disease. Lifestyle factors such as smoking, alcohol consumption, and breathing through the mouth can also contribute to dry mouth.
        </p>
        <h1>Treatment and Prevention:</h1>
        <p>
          Treatment for xerostomia focuses on addressing the underlying cause and relieving symptoms. Drinking plenty of water, chewing sugar-free gum, and using saliva substitutes can help keep the mouth moist. Avoiding alcohol, caffeine, and tobacco can also reduce dryness. If medications are the cause, consult your doctor about adjusting your prescription. Regular dental check-ups are important to prevent complications like tooth decay and gum disease.
        </p>
      </section>
    </div>
  );
};

export default Xerostomia;