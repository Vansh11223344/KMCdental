import React from 'react';
import './Stained.css'; // Assuming you have a CSS file for styling

const Stained = () => {
  return (
    <div className="container" style={{ backgroundImage: `url('cavitybg.webp')` }}>
      <header>
        <div className="header-content">
          <a href="/" className="home-link">
            <span role="img" aria-label="home">🏠</span>
          </a>
          <h1>Stained Teeth</h1>
        </div>
      </header>
      <section className="content">
        <img src="stainedteeth.jpg" alt="Stained Teeth" className="stained-teeth-image" />
        <p>
          Stained teeth, also known as tooth discoloration, occur when the natural color of the teeth changes, resulting in a yellow, brown, or gray appearance. Stains can be extrinsic (on the surface of the teeth) or intrinsic (within the tooth structure). While stained teeth are often a cosmetic concern, they can also indicate underlying dental issues.
        </p>
        <h1>Common Causes:</h1>
        <p>
          Stained teeth can be caused by various factors, including consumption of staining foods and beverages like coffee, tea, and red wine. Smoking and tobacco use are also major contributors to tooth discoloration. Poor oral hygiene, certain medications, aging, and trauma to the teeth can also lead to stains. Intrinsic stains may result from excessive fluoride exposure during childhood or dental conditions like enamel hypoplasia.
        </p>
        <h1>Prevention and Treatment:</h1>
        <p>
          To prevent stained teeth, limit consumption of staining foods and beverages, quit smoking, and maintain good oral hygiene. Regular brushing, flossing, and dental cleanings can help remove surface stains. For deeper stains, professional treatments like teeth whitening, veneers, or bonding may be recommended. Consult your dentist to determine the best treatment option for your specific case.
        </p>
      </section>
    </div>
  );
};

export default Stained;