import React from 'react';
import './DentalTrauma.css'; // Assuming you have a CSS file for styling

const DentalTrauma = () => {
  return (
    <div className="container" style={{ backgroundImage: `url('src/components/ulcersbg.webp')` }}>
      <header>
        <div className="header-content">
          <a href="/" className="home-link">
            <span role="img" aria-label="home">🏠</span>
          </a>
          <h1>Dental Trauma</h1>
        </div>
      </header>
      <section className="content">
         {/*<img src="dentaltrauma.jpg" alt="Dental Trauma" className="dental-trauma-image" />*/}
        <p>
          Dental trauma refers to injuries to the teeth, gums, or surrounding structures caused by accidents, sports injuries, falls, or other impacts. Common types of dental trauma include chipped or broken teeth, knocked-out teeth, and injuries to the soft tissues of the mouth. Immediate dental care is crucial to prevent further damage and ensure proper healing.
        </p>
        <h1>Common Causes:</h1>
        <p>
          Dental trauma is often caused by accidents such as falls, car crashes, or sports-related injuries. Biting down on hard objects, physical altercations, or even chewing hard foods can also lead to dental injuries. Children and athletes are particularly at risk due to their active lifestyles and participation in contact sports.
        </p>
        <h1>Treatment and Prevention:</h1>
        <p>
          Treatment for dental trauma depends on the type and severity of the injury. For chipped or broken teeth, dental bonding, crowns, or veneers may be used to restore the tooth. A knocked-out tooth should be placed back in its socket or stored in milk or saline until you can see a dentist. Soft tissue injuries may require stitches or antibiotics. To prevent dental trauma, wear a mouthguard during sports, avoid chewing hard objects, and practice good oral hygiene to keep teeth strong.
        </p>
      </section>
    </div>
  );
};

export default DentalTrauma;