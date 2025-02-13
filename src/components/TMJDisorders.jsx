import React from 'react';
import './TMJDisorders.css'; // Assuming you have a CSS file for styling

const TMJDisorders = () => {
  return (
    <div className="container" style={{ backgroundImage: `url('cavitybg.webp')` }}>
      <header>
        <div className="header-content">
          <a href="/" className="home-link">
            <span role="img" aria-label="home">🏠</span>
          </a>
          <h1>TMJ Disorders</h1>
        </div>
      </header>
      <section className="content">
        <img src="tmj.jpg" alt="TMJ Disorders" className="tmj-image" />
        <p>
          TMJ disorders are conditions that affect the temporomandibular joint, which connects your jawbone to your skull. These disorders can cause pain and discomfort in the jaw joint and the muscles that control jaw movement. Symptoms may include jaw pain, difficulty chewing, clicking or popping sounds, and headaches. TMJ disorders can be temporary or chronic and may require medical intervention.
        </p>
        <h1>Common Causes:</h1>
        <p>
          TMJ disorders can be caused by a variety of factors, including jaw injury, arthritis, or misalignment of the teeth or jaw. Habits like teeth grinding (bruxism) or clenching can also contribute to TMJ issues. Stress, poor posture, and excessive chewing of gum or hard foods can exacerbate the condition. In some cases, the exact cause of TMJ disorders is unknown.
        </p>
        <h1>Treatment and Management:</h1>
        <p>
          Treatment for TMJ disorders depends on the severity of the condition. Mild cases can often be managed with self-care practices like eating soft foods, applying ice packs, and avoiding extreme jaw movements. For more severe cases, treatments may include physical therapy, medications, or the use of a mouthguard to prevent teeth grinding. In rare cases, surgery may be required to correct the joint.
        </p>
      </section>
    </div>
  );
};

export default TMJDisorders;