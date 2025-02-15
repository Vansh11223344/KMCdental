import React from 'react';
import './Gum.css'; // Assuming you have a CSS file for styling

const Gum = () => {
  return (
    <div className="container" style={{ backgroundImage: `url('src/components/toothachebg.webp')` }}>
      <header>
        <div className="header-content">
          <a href="/" className="home-link">
            <span role="img" aria-label="home">🏠</span>
          </a>
          <h1>Gum Disease</h1>
        </div>
      </header>
      <section className="content">
      {/*   <img src="gum.jpg" alt="Gum Disease" className="gum-image" />*/}
        <p>
          Gum disease, also known as periodontal disease, is an infection of the tissues that surround and support your teeth. It is a major cause of tooth loss in adults and is often painless, so you may not know you have it. Gum disease ranges from simple gum inflammation (gingivitis) to serious damage to the soft tissue and bone that support the teeth (periodontitis).
        </p>
        <h1>Common Causes:</h1>
        <p>
          Gum disease is primarily caused by the buildup of plaque, a sticky film of bacteria that forms on teeth. Poor oral hygiene, smoking, hormonal changes, diabetes, and certain medications can increase the risk of gum disease. Genetics and a weakened immune system can also play a role in the development of periodontal disease.
        </p>
        <h1>Prevention and Treatment:</h1>
        <p>
          To prevent gum disease, brush your teeth twice a day, floss daily, and visit your dentist regularly for cleanings and check-ups. Quitting smoking and managing conditions like diabetes can also reduce your risk. Treatment for gum disease may include deep cleaning (scaling and root planing), medications, or surgery in severe cases. Early detection and treatment are key to preventing complications.
        </p>
      </section>
    </div>
  );
};

export default Gum;