import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import './DentalForm.css'; 

const DentalForm = () => {
  const location = useLocation();
  //const { dentist } = location.state;
  const navigate = useNavigate(); 

  return (
    <div className="dental-form-container">
      {/* Home icon with navigation */}
      <div className="header">
        <span
          className="home-icon"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}
        >
          🏠
        </span>
        <h1 style={{ display: 'inline', marginLeft: '10px' }}>Online Dental Consultation Form</h1>
      </div>
      
      <p className="subheading">
        Simply complete the below form and attach a minimum of 3 clear photos as specified. Our Tooth Doctor Dentists will be in touch with feedback, advice, and options for you.
      </p>
      <p className="note"></p>

      <form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="comments">Supporting Comments / Questions (optional)</label>
          <textarea id="comments" name="comments" rows="4"></textarea>
        </div>

        <div className="form-group">
          <label>Image 1: Front View Smile / Close Up</label>
          <input type="file" accept="image/*" required />
        </div>

        <div className="form-group">
          <label>Image 2: Side View / Natural Smile</label>
          <input type="file" accept="image/*" required />
        </div>

        <div className="form-group">
          <label>Image 3: Close up Area of Concern</label>
          <input type="file" accept="image/*" required />
        </div>

        <div className="form-group checkbox-group">
          <input type="checkbox" id="disclaimer" name="disclaimer" required />
          <label htmlFor="disclaimer">
            By submitting the above information, I understand that any advice or feedback received from Tooth Doctor is subject to a further clinic-based consultation.
          </label>
        </div>

        <button type="submit" className="submit-button">SEND</button>
      </form>
    </div>
  );
};

export default DentalForm;