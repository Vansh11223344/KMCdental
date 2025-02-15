import React from 'react';
import './Infection.css'; // Assuming you have a CSS file for styling

const Infection = () => {
  return (
    <div className="container" style={{ backgroundImage: `url('src/components/toothachebg.webp')` }}>
      <header>
        <div className="header-content">
          <a href="/" className="home-link">
            <span role="img" aria-label="home">🏠</span>
          </a>
          <h1>Dental Infection</h1>
        </div>
      </header>
      <section className="content">
         {/*<img src="infection.jpg" alt="Dental Infection" className="infection-image" />*/}
        <p>
          A dental infection, also known as a tooth abscess, is a pocket of pus caused by a bacterial infection. It can occur in different parts of the tooth, such as the root (periapical abscess) or the gums (periodontal abscess). Dental infections are often painful and can lead to swelling, fever, and a bad taste in the mouth. If left untreated, the infection can spread to other parts of the body, leading to serious complications.
        </p>
        <h1>Common Causes:</h1>
        <p>
          Dental infections are typically caused by untreated cavities, cracked teeth, or gum disease. Bacteria can enter the tooth or gums, leading to infection and pus formation. Poor oral hygiene, a high-sugar diet, and a weakened immune system can increase the risk of developing an abscess. Trauma to the tooth or previous dental work can also contribute to the condition.
        </p>
        <h1>Symptoms and Treatment:</h1>
        <p>
          Symptoms of a dental infection include severe toothache, swelling in the face or cheek, sensitivity to hot and cold, fever, and difficulty swallowing or breathing. Treatment involves draining the abscess and eliminating the infection. This may include root canal therapy, tooth extraction, or antibiotics. To prevent dental infections, maintain good oral hygiene, visit your dentist regularly, and address dental issues like cavities or gum disease promptly.
        </p>
      </section>
    </div>
  );
};

export default Infection;