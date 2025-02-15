import React from 'react';
import './Grinding.css'; // Assuming you have a CSS file for styling

const Grinding = () => {
  return (
    <div className="container" style={{ backgroundImage: `url('src/components/ulcersbg.webp')` }}>
      <header>
        <div className="header-content">
          <a href="/" className="home-link">
            <span role="img" aria-label="home">🏠</span>
          </a>
          <h1>Grinding (Bruxism)</h1>
        </div>
      </header>
      <section className="content">
      {/*   <img src="grinding.jpg" alt="Grinding (Bruxism)" className="grinding-image" />*/}
        <p>
          Grinding, also known as bruxism, is a condition where a person clenches or grinds their teeth, often unconsciously. This can occur during the day or at night (sleep bruxism) and can lead to tooth damage, jaw pain, headaches, and other complications. Bruxism is often linked to stress, anxiety, or misaligned teeth.
        </p>
        <h1>Common Causes:</h1>
        <p>
          Bruxism is commonly caused by stress, anxiety, or tension. It can also result from misaligned teeth, an abnormal bite, or sleep disorders such as sleep apnea. Lifestyle factors like excessive caffeine or alcohol consumption, smoking, and certain medications can also contribute to teeth grinding. In some cases, bruxism may be a side effect of neurological conditions.
        </p>
        <h1>Prevention and Treatment:</h1>
        <p>
          To prevent bruxism, manage stress through relaxation techniques like meditation or yoga. Avoid caffeine and alcohol, especially before bed. If you grind your teeth at night, your dentist may recommend a custom-fitted mouthguard to protect your teeth. In cases of misaligned teeth, orthodontic treatment may be necessary. For severe bruxism, therapy or medication to address underlying stress or anxiety may be prescribed.
        </p>
      </section>
    </div>
  );
};

export default Grinding;