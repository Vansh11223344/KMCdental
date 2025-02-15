import React from 'react';
import './Toothache.css';

const Toothache = () => {
  return (
    <div className="container" style={{ backgroundImage: `url('src/components/toothachebg.webp')` }}>
      <header>
        <div className="header-content">
          <a href="/" className="home-link">
            <span role="img" aria-label="home">🏠</span>
          </a>
          <h1>Toothache</h1>
        </div>
      </header>
      <section className="content">
         {/*<img src="toothache.jpg" alt="Toothache" className="toothache-image" />*/}
        <p>
          A toothache is pain in or around a tooth, often caused by dental issues such as cavities, gum disease, tooth fractures, or infections. The pain can range from mild discomfort to severe, throbbing pain and may be accompanied by swelling, fever, or sensitivity to hot or cold foods and drinks. Toothaches should not be ignored, as they can indicate underlying dental problems that require professional treatment.
        </p>
        <h1>Common Causes:</h1>
        <p>
          Toothaches are commonly caused by tooth decay, which leads to cavities and infections. Gum disease, such as gingivitis or periodontitis, can also cause pain and inflammation around the teeth. Other causes include tooth fractures, abscesses, impacted wisdom teeth, or grinding teeth (bruxism). In some cases, tooth pain may be referred pain from sinus infections or jaw issues.
        </p>
        <h1>When to See a Dentist:</h1>
        <p>
          If you experience severe or persistent tooth pain, swelling, or fever, it is important to see a dentist as soon as possible. Delaying treatment can lead to complications such as abscesses or tooth loss. In the meantime, you can manage pain with over-the-counter pain relievers, saltwater rinses, or cold compresses. Maintaining good oral hygiene and regular dental check-ups can help prevent toothaches.
        </p>
      </section>
    </div>
  );
};

export default Toothache;