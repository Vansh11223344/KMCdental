import React from 'react';
import './LooseTeeth.css'; // Assuming you have a CSS file for styling

const LooseTeeth = () => {
  return (
    <div className="container" style={{ backgroundImage: `url('toothachebg.webp')` }}>
      <header>
        <div className="header-content">
          <a href="/" className="home-link">
            <span role="img" aria-label="home">🏠</span>
          </a>
          <h1>Loose Teeth</h1>
        </div>
      </header>
      <section className="content">
        <img src="looseteeth.jpg" alt="Loose Teeth" className="loose-teeth-image" />
        <p>
          Loose teeth are a common dental issue that can occur in both children and adults. In children, loose teeth are a natural part of losing baby teeth. However, in adults, loose teeth can indicate underlying dental problems such as gum disease, injury, or bone loss. If left untreated, loose teeth can lead to tooth loss and other complications.
        </p>
        <h1>Common Causes:</h1>
        <p>
          Loose teeth in adults are often caused by advanced gum disease (periodontitis), which damages the supporting bone and tissues. Trauma or injury to the mouth, teeth grinding (bruxism), and osteoporosis can also lead to loose teeth. Poor oral hygiene, smoking, and certain medical conditions like diabetes can increase the risk of developing loose teeth.
        </p>
        <h1>Treatment and Prevention:</h1>
        <p>
          Treatment for loose teeth depends on the underlying cause. For gum disease, deep cleaning (scaling and root planing) or surgical procedures may be necessary. A splint or bite guard can help stabilize loose teeth caused by grinding. In severe cases, tooth extraction and replacement with implants or dentures may be required. To prevent loose teeth, maintain good oral hygiene, avoid smoking, and visit your dentist regularly for check-ups and cleanings.
        </p>
      </section>
    </div>
  );
};

export default LooseTeeth;